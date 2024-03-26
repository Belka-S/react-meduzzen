import * as TNK from 'store/auth/authThunks';

import {
  combineReducers,
  createSlice,
  isAnyOf,
  PayloadAction,
} from '@reduxjs/toolkit';

export type TAuth = {
  access_token: string;
  token_type?: string;
};

export const initialState: TAuth = {
  access_token: '',
  token_type: '',
};

const thunkArr = [TNK.loginThunk];

const fn = (type: 'pending' | 'fulfilled' | 'rejected') =>
  thunkArr.map(el => {
    if (type === 'pending') return el.pending;
    if (type === 'fulfilled') return el.fulfilled;
    else return el.rejected;
  });

// fulfilled slice
const handleLoginSucsess = (
  state: TAuth,
  action: PayloadAction<{ result: TAuth }>,
) => {
  return { ...state, ...action.payload.result };
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: handleLoginSucsess,
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(TNK.loginThunk.fulfilled, handleLoginSucsess);
  },
});

// loading slice
const authLoadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => true)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), () => false);
  },
});

// error slice
const authErrorSlice = createSlice({
  name: 'error',
  initialState: false,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...fn('pending')), () => false)
      .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
      .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
  },
});

export const authReducer = combineReducers({
  token: authSlice.reducer,
  loading: authLoadingSlice.reducer,
  error: authErrorSlice.reducer,
});

export const { login, logout } = authSlice.actions;
