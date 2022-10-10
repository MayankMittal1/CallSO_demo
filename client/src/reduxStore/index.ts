import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import errorReducer from "./errorSlice";
import callReducer from "./callSlice";
import { injectStore } from "../helpers/storeInteract";

export const store = configureStore({
  reducer: {
    authState: authReducer,
    errorState: errorReducer,
    callState: callReducer,
  },
});

injectStore(store);

// export const dispatch = (action) => {
//   store.dispatch(action);
// };
