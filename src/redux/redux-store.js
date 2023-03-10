import {combineReducers, legacy_createStore, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})

let store = legacy_createStore(reducers);
export default store