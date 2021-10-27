import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { editItemAsync, fetchSingleItemAsync } from "../store/actions";
import Swal from "sweetalert2"


export default function EditInventory({categories}) {
  const params = useParams()
  const { id:itemId } = params
  const history = useHistory()
  const dispatch = useDispatch()

  const [edit_item_id, setEditItemId] = useState("");
  const [edit_item_name, setEditItemName] = useState("");
  const [edit_item_price, setEditItemPrice] = useState("");
  const [edit_item_description, setEditItemDescription] = useState("");
  const [edit_item_category, setEditItemCategory] = useState("");

  useEffect(() => {
    dispatch(fetchSingleItemAsync(itemId))
      .then((res) => res.json())
      .then((data) => {
        setEditItemId(data.id);
        setEditItemName(data.name);
        setEditItemPrice(data.price);
        setEditItemDescription(data.description);
        setEditItemCategory(data.CategoryId);
      });
  }, [dispatch, itemId])

  function editItemHandler() {
    let name = edit_item_name
    let description = edit_item_description
    let price = edit_item_price
    let CategoryId = edit_item_category
    let imgUrl = document.getElementById("edit-imgUrl").files[0]

    let form = new FormData()
    form.append('name', name)
    form.append('description', description)
    form.append('price', price)
    form.append('CategoryId', CategoryId)
    if(imgUrl) {
      form.append('imgUrl', imgUrl)
    }

    dispatch(editItemAsync(form, itemId))
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        if(data.message) {
          throw new Error(data.message)
        }
        setEditItemId("");
        setEditItemName("");
        setEditItemPrice("");
        setEditItemDescription("");
        setEditItemCategory("");
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
        <h1 class="display-4">edit New Item</h1>
        <p class="lead text-muted">You can edit new Item here</p>
      </div>

      <label htmlFor="edit-name" class="form-label mt-5">
        Name:{" "}
      </label>
      <div class="col-3">
        <input
          type="text"
          id="edit-name"
          class="form-control"
          value={edit_item_name}
          onChange={(event) => setEditItemName(event.target.value)}
        />
      </div>
      <div class="col-9"></div>

      <label htmlFor="edit-description" class="form-label mt-5">
        Description:{" "}
      </label>
      <div class="col-5">
        <textarea
          type="text"
          id="edit-description"
          class="form-control"
          name="description"
          placeholder="e.g. A very solid watch"
          value={edit_item_description}
          onChange={(event) => setEditItemDescription(event.target.value)}
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
          value={edit_item_price}
          onChange={(event) => setEditItemPrice(event.target.value)}
        />
      </div>
      <div class="col-9"></div>

      <label htmlFor="edit-category" class="form-label mt-5">
        Category:{" "}
      </label>
      <div class="col-3">
        <select
          value={edit_item_category}
          onChange={(event) => setEditItemCategory(event.target.value)}
          class="form-select"
          id="edit-category"
        >
          <option value=""> -- Choose a category -- </option>
          {categories.map((category, index) => (
            <option key={category.id} value={category.id}>
              {" "}
              {category.name}{" "}
            </option>
          ))}
        </select>
      </div>
      <div class="col-9"></div>

      <div class="col-12">
        <label class="form-label mt-5">Image:</label>
        <input
          type="file"
          id="edit-imgUrl"
          class="form-control-file mb-5"
          name="imgUrl"
        />
      </div>

      <div class="col-12">
        <button
          onClick={() => editItemHandler(edit_item_id)}
          class="btn btn-primary btn-lg"
          type="button"
        >
          {" "}
          Submit{" "}
        </button>
        <button 
        onClick={() => history.push('/')}
        class="btn btn-primary btn-lg" value="button">
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  );
}
