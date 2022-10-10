import React, { createContext } from "react";
import * as io from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  acceptCallState,
  decline,
  recieveCall,
} from "../../reduxStore/callSlice";
import { joinCall } from "../../helpers/socket";

const WebSocketContext = createContext(null);

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

  const offerCall = (from: string, to: string) => {
    const payload = {
      from: from,
      to: to,
    };
    socket.emit("OFFER_CALL", JSON.stringify(payload));
  };

  const acceptCall = (from: string, to: string, channel: string) => {
    const payload = {
      from: from,
      to: to,
      channel: channel,
    };
    socket.emit("ACCEPT_CALL", JSON.stringify(payload));
  };

  const declineCall = (from: string, to: string) => {
    const payload = {
      from: from,
      to: to,
    };
    socket.emit("DECLINE_CALL", JSON.stringify(payload));
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
      dispatch(recieveCall(msg.from));
    });

    socket.on("ACCEPT_CALL", (msg: any) => {
      console.log("ACCEPT_CALL");
      dispatch(acceptCallState());
      joinCall(1, 2, msg.channel);
    });

    socket.on("DECLINE_CALL", (msg: any) => {
      console.log("DECLINE_CALL");
      dispatch(decline());
    });

    ws = {
      socket: socket,
      loginSockets,
      offerCall,
      acceptCall,
      declineCall,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
