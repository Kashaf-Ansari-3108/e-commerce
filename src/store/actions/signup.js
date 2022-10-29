import ActionTypes from "../constant";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {collection,doc,setDoc} from "firebase/firestore";
import {auth,db} from '../../firebase'


const setName = (val) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_NAME,
      payload:val
    });
  };
};
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
const setContact = (val) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_CONTACT,
      payload:val
    });
  };
};
const setAdress = (val) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_ADRESS,
      payload:val
    });
  };
};
const setCountry = (val) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_COUNTRY,
      payload:val
    });
  };
};
const createUserAction = (email,pwd,name,contact,adress,country) => {
  return async (dispatch) => {
    
    const auth = getAuth();
    const dbCollection = collection(db, "users");
    createUserWithEmailAndPassword(auth, email, pwd)
    .then( async (resolve)=>{
      console.log(resolve,"signup")
      const obj = {
        name,
        email,
        pwd,
        contact,
        country,
        adress,
        uid:resolve.user.uid,
      }
      // await addDoc(dbCollection, obj);
      await setDoc(doc(db, "users", resolve.user.uid), obj);
     
      dispatch({
         type: ActionTypes.CREATE_USER_SUCCESS,
         payload:resolve.user.uid
         });
    
    })
      
    .catch((err)=>{
      console.log(err,'error')})
      dispatch({
            type: ActionTypes.CREATE_USER_FAILED,
          });
  };
    
  
};




export { setName,setEmail,setPwd,setContact,setAdress,setCountry,createUserAction};