import { setAddressAndNetwork } from "../reduxStore/authSlice";
import { throwErrorAction, throwSuccessAction } from "../reduxStore/errorSlice";

let store: { dispatch: (arg0: { payload: any; type: string }) => void };

export const injectStore = (_store: any) => {
  store = _store;
};

export const throwError = (message: any) => {
  store.dispatch(throwErrorAction(message));
};

export const throwSuccess = (message: any) => {
  store.dispatch(throwSuccessAction(message));
};

export const updateConnectedUser = (address: any, network: any) => {
  store.dispatch(setAddressAndNetwork({ address, network }));
};
