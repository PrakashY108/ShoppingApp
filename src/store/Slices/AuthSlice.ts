
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  id: number;
  name: string;
}

interface AuthState {
  isLogged: boolean;
  userData: UserData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLogged: false,
  userData: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
reducers: {
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<UserData>) {
      state.isLogged = true;
      state.userData = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLogged = false;
      state.userData = null;
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      return initialState; 
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export const authReducer= authSlice.reducer;
