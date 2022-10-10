import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  isError: true,
  errorMessage: "",
  isSuccess: true,
  successMessage: "",
};

let errStack = [];

setInterval(() => {
  if (errStack.length != 0) {
    errStack = [];
  }
}, 1000);

const errorSlice = createSlice({
  name: "ERROR_STATE",
  initialState: INIT_STATE,
  reducers: {
    throwErrorAction: (state, { payload }) => {
      if (!errStack.includes(payload)) {
        state.errorMessage = payload;
        errStack.push(payload);
      }
    },
    throwSuccessAction: (state, { payload }) => {
      state.successMessage = payload;
    },
  },
});

export const selectErrorSlice = (state) => state.errorState;

export const { throwErrorAction, throwSuccessAction } = errorSlice.actions;

export default errorSlice.reducer;
