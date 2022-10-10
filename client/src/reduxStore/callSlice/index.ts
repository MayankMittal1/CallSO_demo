import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng";

import {
  walletConnect,
  walletDisconnect,
  walletConnectIfCache,
} from "../../helpers/web3Auth";

type CallStateType = {
  status: string;
  error?: string;
  from?: string;
  client?: IAgoraRTCClient;
};

const INIT_STATE: CallStateType = {
  status: "IDLE",
};

export const recieveCall = createAsyncThunk(
  "CALL/RECIEVE_CALL",
  (address: string, thunkAPI) => {
    return new Promise<string>((resolve, reject) => {
      resolve(address);
    });
  }
);

export const decline = createAsyncThunk(
  "CALL/RECIEVE_CALL",
  (undefined, thunkAPI) => {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }
);

export const acceptCallState = createAsyncThunk(
  "CALL/ACCEPT_CALL",
  (undefined, thunkAPI) => {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }
);

export const reset = createAsyncThunk("CALL/RESET", (thunkAPI) => {
  return new Promise<void>((resolve, reject) => {
    resolve();
  });
});

const callSlice = createSlice({
  name: "CALL_STATE",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: {
    [recieveCall.fulfilled.toString()]: (state, { payload }) => {
      console.log("recieved");
      state.status = "RECIEVED";
      state.from = payload;
    },
    [acceptCallState.fulfilled.toString()]: (state, payload) => {
      state.status = "ACCEPTED";
    },
    [reset.fulfilled.toString()]: (state, payload) => {
      state.status = "IDLE";
      state.from = undefined;
    },
  },
});

export const selectCallState = (state: any) => state.callState;

export default callSlice.reducer;
