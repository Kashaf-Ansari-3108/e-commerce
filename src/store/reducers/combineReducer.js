import { combineReducers } from "redux";
import { GetProductReducer,AddToCartReducer } from "./productReducer";
import { signUpReducer } from "./signupReducer";
import {loginReducer} from "./loginReducer"
const combineReducer = combineReducers({
   GetProductReducer: GetProductReducer,
    AddToCartReducer: AddToCartReducer,
    signUpReducer:signUpReducer,
    loginReducer:loginReducer
  });
  export default combineReducer;