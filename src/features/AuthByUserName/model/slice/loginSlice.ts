import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../service/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,

  // редьюсеры для изменения имени и пароля
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },

  // для изменения стейта, обработка трех состояний(pending, fulfilled, rejected)
  extraReducers: (builder) => {
    builder
      // начал выполнять async action
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
