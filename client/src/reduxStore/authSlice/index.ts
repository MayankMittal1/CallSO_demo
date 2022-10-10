import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";
import { resolve } from "path";
import { reverseUrl } from "../../helpers/resolution";

import {
  walletConnect,
  walletDisconnect,
  walletConnectIfCache,
} from "../../helpers/web3Auth";

type AuthStateType = {
  address?: string;
  network?: number;
  url?: string;
};

const INIT_STATE: AuthStateType = {};

export const connectWallet = createAsyncThunk(
  "AUTH/CONNECT_WALLET",
  (undefined, thunkAPI) => {
    return new Promise((resolve, reject) => {
      walletConnect()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(thunkAPI.rejectWithValue(err));
        });
    });
  }
);

export const disconnectWallet = createAsyncThunk(
  "AUTH/DISCONNECT_WALLET",
  () => {
    return new Promise<void>((resolve, reject) => {
      walletDisconnect();
      resolve();
    });
  }
);

export const fetchURL = createAsyncThunk(
  "AUTH/FETCH_URL",
  (address: string, thunkAPI) => {
    return new Promise<void>((resolve, reject) => {
      console.log("fetching url");
      reverseUrl(address)
        .then((url) => {
          console.log(url);
          resolve(url);
        })
        .catch((err) => {
          reject(thunkAPI.rejectWithValue(err));
        });
    });
  }
);

export const connectWalletIfCache = createAsyncThunk(
  "AUTH/CONNECT_WALLET_CACHE",
  async () => {
    return new Promise((resolve, reject) => {
      walletConnectIfCache()
        .then((data) => {
          resolve(data);
        })
        .catch(() => {
          reject();
        });
    });
  }
);

const authSlice = createSlice({
  name: "AUTH_STATE",
  initialState: INIT_STATE,
  reducers: {
    setProvider: (state, { payload }) => {},
    setAddressAndNetwork: (state, { payload }) => {
      state.address = payload.address;
      state.network = payload.network;
      state.url = payload.url;
    },
  },
  extraReducers: {
    [connectWallet.pending.toString()]: (state) => {},
    [connectWallet.fulfilled.toString()]: (state, { payload }) => {
      state.address = payload.address;
      state.network = payload.network;
    },
    [connectWallet.rejected.toString()]: (state, { payload }) => {},
    [disconnectWallet.fulfilled.toString()]: (state, { payload }) => {
      state.address = undefined;
      state.network = undefined;
      state.url = undefined;
    },
    [connectWalletIfCache.fulfilled.toString()]: (state, { payload }) => {
      state.address = payload.address;
      state.network = payload.network;
    },
    [fetchURL.fulfilled.toString()]: (state, { payload }) => {
      state.url = payload;
    },
  },
});

export const selectAuthState = (state: any) => state.authState;
export const { setAddressAndNetwork } = authSlice.actions;

export default authSlice.reducer;
