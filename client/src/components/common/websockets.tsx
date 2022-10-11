import React, { createContext } from "react";
import * as io from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  acceptCallState,
  recieveCall,
  reset,
} from "../../reduxStore/callSlice";
import { joinCall } from "../../helpers/socket";

const WebSocketContext = createContext(undefined);

export { WebSocketContext };

export default ({ children }: any) => {
  let socket: any;
  let ws;

  const dispatch = useDispatch();

  const loginSockets = (address: string, url: string) => {
    const payload = {
      address: address,
      url: url,
    };
    socket.emit("LOGIN", JSON.stringify(payload));
    //dispatch(updateChatLog(payload));
  };

  const offerCall = (from: string, to: string, url?: string) => {
    const payload = {
      from: from,
      to: to,
      url: url,
    };
    socket.emit("OFFER_CALL", JSON.stringify(payload));
  };

  const acceptCall = (
    from: string,
    to: string,
    channel: string,
    url: string
  ) => {
    const payload = {
      from: from,
      to: to,
      channel: channel,
      url: url,
    };
    socket.emit("ACCEPT_CALL", JSON.stringify(payload));
  };

  const endCall = (from: string, to: string) => {
    console.log("EnDING");
    const payload = {
      from: from,
      to: to,
    };
    socket.emit("END_CALL", JSON.stringify(payload));
  };

  if (!socket) {
    socket = io.connect("http://localhost:3000");
    console.log("socket connecting");

    socket.on("CALL_BUSY", (msg: any) => {
      alert("User is busy or not connected");
      //dispatch(updateChatLog(payload));
    });

    socket.on("OFFER_CALL", (msg: any) => {
      console.log("OFFER_CALL");
      dispatch(recieveCall({ address: msg.from, url: msg.url }));
    });

    socket.on("ACCEPT_CALL", (msg: any) => {
      console.log("ACCEPT_CALL");
      dispatch(acceptCallState({ from: msg.to, fromUrl: msg.url }));
      joinCall(1, 2, msg.channel);
    });

    socket.on("END_CALL", (msg: any) => {
      console.log("DECLINE_CALL");
      dispatch(reset());
    });

    ws = {
      socket: socket,
      loginSockets,
      offerCall,
      acceptCall,
      endCall,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
