import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/actionTypes';

interface initialStateTypes {
  islogged: boolean;
  userData: any;
  isloading: boolean;
  error: any;
}
const initialState: initialStateTypes = {
  islogged: false,
  userData: null,
  isloading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isloading: true,
        error: null,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        islogged: true,
        userData: action.payload,
        isloading: false,
        error: null,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        islogged: false,
        userData: null,
        isloading: false,
        error: action.payload,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};
export default authReducer;
