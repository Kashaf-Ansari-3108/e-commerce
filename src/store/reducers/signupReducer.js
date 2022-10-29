import ActionTypes from "../constant";

const INTIALSTATE = {
  name:"",
  email:"",
  pwd:"",
  contact:"",
  adress:"",
  country:"",
  uid:""
};

///JS PURE FUNCTIONS
const signUpReducer = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_NAME:
            return {
                ...state,
                name : action.payload 
            };
    case ActionTypes.SET_EMAIL:
            return {
                ...state,
                email : action.payload 
            };
            case ActionTypes.SET_PWD:
              return {
                  ...state,
                  pwd : action.payload 
              };
              case ActionTypes.SET_CONTACT:
            return {
                ...state,
                contact : action.payload 
            };
            case ActionTypes.SET_ADRESS:
            return {
                ...state,
                adress : action.payload 
            };
            case ActionTypes.SET_COUNTRY:
            return {
                ...state,
                country : action.payload 
            };
            case ActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                uid: action.payload
            };
            case ActionTypes.CREATE_USER_FAILED:
            return {
                ...state,
                
            };
        default:
            return state;
  }
};

export { signUpReducer };