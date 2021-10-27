import {
  GET_INVENTORIES,
  ADD_INVENTORY,
  EDIT_INVENTORY,
  DELETE_INVENTORY,
  SET_LOADING_INVENTORY,
  SET_ERROR_INVENTORY
} from '../keys'
  
const initialState = {
  loading: false,
  error: null,
  inventories: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LOADING_INVENTORY:
      return { ...state, loading: payload }
    case SET_ERROR_INVENTORY:
      return { ...state, error: payload }

    case GET_INVENTORIES:
      return { ...state, inventories: payload }

    case ADD_INVENTORY:
      let addNewInventory = state.inventories.map(el => el)
      addNewInventory.push(payload)
      return { ...state, inventories: addNewInventory }

    case EDIT_INVENTORY:
      let editInventory = state.inventories.filter(el => el.id !== Number(payload.id))
      editInventory.push(payload.data)
      return { ...state, inventories: editInventory }

    case DELETE_INVENTORY:
      let newInventories = state.inventories.filter(el => el.id !== Number(payload))
      return { ...state, inventories: newInventories }

    default:
      return state
  }
}

export default reducer
