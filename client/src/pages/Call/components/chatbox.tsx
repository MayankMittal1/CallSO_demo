import React from "react";

const Chatbox = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent-100 text-gray-800 p-10">
      <div
        className="flex flex-col flex-grow w-full max-w-xl shadow-xl rounded-lg overflow-hidden"
        style={{ backgroundColor: "#1f2429" }}
      >
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div
                className="p-3 rounded-r-lg rounded-bl-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm text-white">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div
                className="p-3 rounded-r-lg rounded-bl-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            <div>
              <div
                className="p-3 rounded-r-lg rounded-bl-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ backgroundColor: "#4a5767" }}
              >
                <p className="text-sm">Lorem ipsum dolor sit.</p>
              </div>
              <span className="text-xs text-white leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div className="p-4" style={{ backgroundColor: "#4a5767" }}>
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm text-white"
            type="text"
            placeholder="Type your message…"
            style={{ backgroundColor: "#1f2429" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
