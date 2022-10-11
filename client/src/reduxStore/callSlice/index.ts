import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng";
import { initCLient } from "../../helpers/socket";

import {
  walletConnect,
  walletDisconnect,
  walletConnectIfCache,
} from "../../helpers/web3Auth";
const appId = "66701574e10e4079b69531faa6c01029";
type CallStateType = {
  status: string;
  error?: string;
  from?: string;
  fromUrl?: string;
  client?: IAgoraRTCClient;
  remoteAudioTrack?: any;
  remoteVideoTrack?: any;
  localAudioTrack?: any;
  localVideoTrack?: any;
  chat: Array<any>;
};

const INIT_STATE: CallStateType = {
  status: "IDLE",
  chat: [],
};

export const initializeClient = createAsyncThunk(
  "CLIENT/INITIALIZE",
  (undefined, thunkAPI) => {
    return new Promise<any>((resolve, reject) => {
      const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      initCLient(client);
      resolve(client);
    });
  }
);

export const recieveCall = createAsyncThunk(
  "CALL/RECIEVE_CALL",
  ({ address, url }: any, thunkAPI) => {
    return new Promise<any>((resolve, reject) => {
      resolve({ address, url });
    });
  }
);

export const decliIAgoraRTCClientne = createAsyncThunk(
  "CALL/RECIEVE_CALL",
  (undefined, thunkAPI) => {
    return new Promise<void>((resolve, reject) => {
      resolve();
    });
  }
);

export const acceptCallState = createAsyncThunk(
  "CALL/ACCEPT_CALL",
  ({ from, fromUrl }: any, thunkAPI) => {
    return new Promise<any>((resolve, reject) => {
      resolve({ from, fromUrl });
    });
  }
);

export const reset = createAsyncThunk("CALL/RESET", (thunkAPI) => {
  return new Promise<void>((resolve, reject) => {
    resolve();
  });
});

export const recieveMessage = createAsyncThunk(
  "CALL/RECIEVE_MESSAGE",
  (data: any, thunkAPI) => {
    return new Promise<void>((resolve, reject) => {
      resolve(data);
    });
  }
);

const callSlice = createSlice({
  name: "CALL_STATE",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: {
    [recieveCall.fulfilled.toString()]: (state, { payload }) => {
      console.log("recieved");
      state.status = "RECIEVED";
      state.from = payload.address;
      state.fromUrl = payload.url;
    },
    [acceptCallState.fulfilled.toString()]: (state, { payload }) => {
      state.status = "ACCEPTED";
      state.from = payload.from;
      state.fromUrl = payload.fromUrl;
    },
    [reset.fulfilled.toString()]: (state, payload) => {
      state.status = "IDLE";
      state.from = undefined;
      state.client?.leave();
      state.chat = [];
      state.client?.unpublish();
    },
    [initializeClient.fulfilled.toString()]: (state, { payload }) => {
      state.client = payload;
    },
    [recieveMessage.fulfilled.toString()]: (state, { payload }) => {
      console.log(payload);
      state.chat.push(payload);
    },
  },
});

export const selectCallState = (state: any) => state.callState;

export default callSlice.reducer;
