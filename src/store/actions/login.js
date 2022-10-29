import ActionTypes from "../constant";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
const setEmail = (val) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_EMAIL,
      payload:val
    });
  };
};
const setPwd = (val) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_PWD,
      payload:val
    });
  };
};

const loginUserAction = (email,pwd) => {
    return async (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pwd)
      .then( async (resolve)=>{
        console.log(resolve,"login")
        localStorage.setItem("uid", resolve.user.uid);
        
        dispatch({
           type: ActionTypes.LOGIN_USER_SUCCESS,
        });
      
      })
        
      .catch((err)=>{
        console.log(err,'error')})
        dispatch({
              type: ActionTypes.LOGIN_USER_FAILED,
            });
    };
      
    
  };
  




export { setEmail,setPwd,loginUserAction};