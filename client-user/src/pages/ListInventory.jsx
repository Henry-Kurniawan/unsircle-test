import React, {useEffect} from "react";
import { useHistory } from "react-router-dom"
import { useSelector , useDispatch } from 'react-redux'
import { actionDeleteInventory, actionGetInventories } from "../store/action/actionInventories";

export default function ListInventory() {
  const history = useHistory()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(actionGetInventories())
  }, [dispatch])

  const inventories = useSelector(state => state.inventoriesState.inventories)
  const permissions = useSelector(state => state.usersState.permissions)

  function deleteInventoryHandler(inventoryId) {
    dispatch(actionDeleteInventory(inventoryId))
  }

  function checkPermission(type) {
    if(permissions.includes(type)) {
      return true
    } else {
      return false
    }
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
              {
                checkPermission("update") 
                ? ( <button 
                  onClick={() => history.push(`/edit/${inventory.id}`)}
                  type="button" className="btn btn-sm btn-warning mb-3">
                  update
                  </button>
                  )
                : ""
              }
              {
                checkPermission("delete") 
                ? ( <button 
                  onClick={() => deleteInventoryHandler(inventory.id)}
                  type="button" className="btn btn-sm btn-danger mb-3 mx-2">
                    delete
                  </button>)
                : ""
              }
             
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
