import { combineReducers } from "redux"
import usersReducer from "./usersReducer"
import inventoriesReducer from "./inventoriesReducer"

const reducer = combineReducers({
    usersState: usersReducer,
    inventoriesState: inventoriesReducer,
})


export default reducer