import React, {useEffect} from "react";
import { useHistory } from "react-router-dom"
import { useSelector , useDispatch } from 'react-redux'
import { actionGetInventories } from "../store/action/actionInventories";

export default function ListInventory() {
  const history = useHistory()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(actionGetInventories())
  }, [dispatch])

  const inventories = useSelector(state => state.inventoriesState.inventories)

  function deleteItemHandler(itemId) {
    // dispatch(deleteItemDataAsync(itemId))
  }

  return (
    <table className="table table-dark table-striped mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventories?.map((inventory, index) => (
          <tr key={inventory.id}>
            <td> {inventory.id} </td>
            <td> {inventory.name} </td>
            <td> {inventory.type} </td>
            <td> {inventory.price} </td>
            <td> {inventory.stock} </td>
            <td className="align-items-center justify-content-center text-center">
              {/* <button 
              onClick={() => history.push(`/edit/${item.id}`)}
              type="button" className="btn btn-sm btn-warning mb-3">
                update
              </button> */}
      
              <button 
              onClick={() => deleteItemHandler(inventory.id)}
              type="button" className="btn btn-sm btn-danger mb-3">
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
