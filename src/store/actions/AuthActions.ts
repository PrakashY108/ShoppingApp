import { LOGOUT, LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from './actionTypes';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload:any
}

interface LogoutAction {
  type: typeof LOGOUT;
}

// Action creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData: any): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
