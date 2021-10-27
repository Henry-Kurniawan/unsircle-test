import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2"
import { actionGetInventory, actionEditInventory } from "../store/action/actionInventories";


export default function EditInventory() {
  const params = useParams()
  const { id:inventoryId } = params
  const history = useHistory()
  const dispatch = useDispatch()

  const [edit_inventory_id, setEditInventoryId] = useState("");
  const [edit_inventory_name, setEditInventoryName] = useState("");
  const [edit_inventory_type, setEditInventoryType] = useState("");
  const [edit_inventory_price, setEditInventoryPrice] = useState("");
  const [edit_inventory_stock, setEditInventoryStock] = useState("");

  useEffect(() => {
    dispatch(actionGetInventory(inventoryId))
    .then((data) => {
      setEditInventoryId(data.id)
      setEditInventoryName(data.name);
      setEditInventoryType(data.type);
      setEditInventoryPrice(data.price);
      setEditInventoryStock(data.stock);
    })
   
   
  }, [dispatch, inventoryId])

  function editItemHandler(inventoryId) {
    const payload = {
      name: edit_inventory_name,
      type: edit_inventory_type,
      price: edit_inventory_price,
      stock: edit_inventory_stock,
    }
  
    dispatch(actionEditInventory(payload, inventoryId))
      .then(() => {
        setEditInventoryName("");
        setEditInventoryType("");
        setEditInventoryPrice("");
        setEditInventoryStock("");
        history.push('/')
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      })
  }

  return (
    <div
      id="edit-item"
      class="page page-heading mx-5"
      style={{ height: "100vh" }}
    >
      <div class="jumbotron container">
        <h1 class="display-4">edit Inventory</h1>
        <p class="lead text-muted">You can edit Inventory here</p>
      </div>

      <label htmlFor="edit-name" class="form-label mt-5">
        Name:{" "}
      </label>
      <div class="col-3">
        <input
          type="text"
          id="edit-name"
          class="form-control"
          value={edit_inventory_name}
          onChange={(event) => setEditInventoryName(event.target.value)}
        />
      </div>
      <div class="col-9"></div>

      <label htmlFor="edit-type" class="form-label mt-5">
        Type:{" "}
      </label>
      <div class="col-5">
        <textarea
          type="text"
          id="edit-type"
          class="form-control"
          name="type"
          value={edit_inventory_type}
          onChange={(event) => setEditInventoryType(event.target.value)}
        >
          {" "}
        </textarea>
      </div>
      <div class="col-7"></div>

      <label htmlFor="edit-price" class="form-label mt-5">
        Price:{" "}
      </label>
      <div class="col-3">
        <input
          type="number"
          id="edit-price"
          class="form-control"
          name="price"
          placeholder="e.g. 10000000"
          value={edit_inventory_price}
          onChange={(event) => setEditInventoryPrice(event.target.value)}
        />
      </div>
      <div class="col-9"></div>

      <label htmlFor="edit-stock" class="form-label mt-5">
        Stock:{" "}
      </label>
      <div class="col-3">
        <input
          type="number"
          id="edit-stock"
          class="form-control"
          name="Stock"
          placeholder="e.g. 10000000"
          value={edit_inventory_stock}
          onChange={(event) => setEditInventoryStock(event.target.value)}
        />
      </div>
      <div class="col-9"></div>

      <div class="col-12 mt-5">
        <button
          onClick={() => editItemHandler(edit_inventory_id)}
          class="btn btn-primary btn-lg"
          type="button"
        >
          {" "}
          Submit{" "}
        </button>
        <button 
        onClick={() => history.push('/')}
        class="btn btn-primary btn-lg mx-3" value="button">
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  );
}
