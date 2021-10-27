import React , {useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { actionAddInventory } from "../store/action/actionInventories";
import Swal from "sweetalert2"

export default function AddInventory( {categories} ) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [add_inventory_name, setAddInventoryName] = useState("");
  const [add_inventory_type, setAddInventoryType] = useState("");
  const [add_inventory_price, setAddInventoryPrice] = useState("");
  const [add_inventory_stock, setAddInventoryStock] = useState("");

  function addInventoryHandler(event) {
    event.preventDefault();
    const payload = {
      name: add_inventory_name,
      type: add_inventory_type,
      price: add_inventory_price,
      stock: add_inventory_stock,
    }
  
    dispatch(actionAddInventory(payload))
      .then(() => {
        setAddInventoryName("");
        setAddInventoryType("");
        setAddInventoryPrice("");
        setAddInventoryStock("");
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
      id="add-inventory"
      class="page page-heading m-5"
      
    >
      <div class="jumbotron container">
        <h1 class="display-4">Add New Inventory</h1>
        <p class="lead text-muted">You can add new Inventory here</p>
      </div>

      <form onSubmit={addInventoryHandler}>
        <label htmlFor="add-name" class="form-label mt-5">
          Name:{" "}
        </label>
        <div class="col-3">
          <input
            type="text"
            id="add-name"
            class="form-control"
            value={add_inventory_name}
            onChange={(event) => setAddInventoryName(event.target.value)}
          />
        </div>
        <div class="col-9"></div>

        <label htmlFor="add-type" class="form-label mt-5">
          Type:{" "}
        </label>
        <div class="col-5">
          <textarea
            type="text"
            id="add-type"
            class="form-control"
            name="type"
            placeholder="e.g. T-Shirt"
            value={add_inventory_type}
            onChange={(event) => setAddInventoryType(event.target.value)}
          >
            {" "}
          </textarea>
        </div>
        <div class="col-7"></div>


        <label htmlFor="add-price" class="form-label mt-5">
          Price:{" "}
        </label>
        <div class="col-3">
          <input
            type="number"
            id="add-price"
            class="form-control"
            name="price"
            placeholder="e.g. 10000000"
            value={add_inventory_price}
            onChange={(event) => setAddInventoryPrice(event.target.value)}
          />
        </div>
        <div class="col-9"></div>

        <label htmlFor="add-stock" class="form-label mt-5">
          Stock:{" "}
        </label>
        <div class="col-3">
          <input
            type="number"
            id="add-stock"
            class="form-control"
            name="stock"
            placeholder="e.g. 10"
            value={add_inventory_stock}
            onChange={(event) => setAddInventoryStock(event.target.value)}
          />
        </div>
        <div class="col-9"></div>


        <div class="col-12 mt-5">
          <button class="btn btn-primary btn-lg" type="submit">
            {" "}
            Submit{" "}
          </button>
          <button 
          onClick={() => history.push('/')}
          class="btn btn-primary btn-lg mx-3" value="Cancel">
            {" "}
            Cancel{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
