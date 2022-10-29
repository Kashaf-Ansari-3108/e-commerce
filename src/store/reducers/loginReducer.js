import ActionTypes from "../constant";

const INTIALSTATE = {
  email: "",
  pwd: "",
};

///JS PURE FUNCTIONS
const loginReducer = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ActionTypes.SET_PWD:
      return {
        ...state,
        pwd: action.payload,
      };
      case ActionTypes.LOGIN_USER_SUCCESS:
        return {
            ...state,
            
        };
        case ActionTypes.LOGIN_USER_FAILED:
        return {
            ...state,
            
        };

    default:
      return state;
  }
};

export { loginReducer };
