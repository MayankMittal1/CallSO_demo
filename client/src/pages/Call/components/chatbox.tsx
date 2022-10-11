import React, { useContext } from "react";
import { IoSendOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { WebSocketContext } from "../../../components/common/websockets";
import useAddress from "../../../components/hooks/useAddress";
import callSlice, { selectCallState } from "../../../reduxStore/callSlice";

const Chatbox = () => {
  const { chat, from }: { chat: Array<any>; from: string } =
    useSelector(selectCallState);
  const ws = useContext(WebSocketContext);
  const [message, setMessage] = React.useState("");
  const address = useAddress();
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent-100 text-gray-800 p-10">
      <div
        className="flex flex-col flex-grow w-full max-w-xl shadow-xl rounded-lg overflow-hidden"
        style={{ backgroundColor: "#1f2429" }}
      >
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          {chat.map((item, index) => {
            if (item.from == address)
              return (
                <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                  <div>
                    <div
                      className="text-white p-3 rounded-l-lg rounded-br-lg"
                      style={{ backgroundColor: "#4a5767" }}
                    >
                      <p className="text-sm text-white">{item.message}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                </div>
              );
            else
              return (
                <div className="flex w-full mt-2 space-x-3 max-w-xs">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div
                      className="p-3 rounded-r-lg rounded-bl-lg"
                      style={{ backgroundColor: "#4a5767" }}
                    >
                      <p className="text-sm text-white">{item.message}</p>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>

        <div className="p-4" style={{ backgroundColor: "#4a5767" }}>
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm text-white"
            type="text"
            placeholder="Type your message…"
            value={message}
            style={{ backgroundColor: "#1f2429" }}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                ws.sendMessage(address, from, message);
                setMessage("");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
