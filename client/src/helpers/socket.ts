import { io, Socket } from "socket.io-client";
import axios from "axios";
import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng";
import { useSelector } from "react-redux";
import { selectCallState } from "../reduxStore/callSlice";

let socket: Socket;
let publicKey: string;
let client: IAgoraRTCClient;
export const initCLient = async (_client: IAgoraRTCClient) => {
  client = _client;
};
export const listenToCall = (callback: Function) => {
  if (!socket) {
    return;
  }

  socket.on("offer", (data) => {
    callback(data);
  });
};

export const listenAcceptCall = (callback: Function) => {
  if (!socket) {
    return;
  }

  socket.on("accept", (data) => {
    callback(data);
  });
};

export const handleOfferCall = (to: string, from: string) => {
  socket.emit("offer", JSON.stringify({ to: to, from: from }));
};

export const fetchToken = (
  uid: any,
  channelName: any,
  tokenRole: any
): Promise<string> => {
  return new Promise(function (resolve) {
    axios
      .post(
        "https://server.msqu4re.me/fetch_rtc_token",
        {
          uid: uid,
          channelName: channelName,
          role: tokenRole,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then(function (response) {
        const token = response.data.token;
        resolve(token);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

export const startBasicCall = async (role: any, uid: any, channel: any) => {
  let rtc = { localAudioTrack: null as any, client: null as any };
  const appId = "66701574e10e4079b69531faa6c01029";

  let token = await fetchToken(uid, channel, role);

  await client.join(appId, channel, token, uid);
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  await client.publish([rtc.localAudioTrack]);
  console.log("acceptedd");

  client.on("user-published", async (user, mediaType) => {
    await client.subscribe(user, mediaType);
    console.log("subscribe success");

    if (mediaType === "audio") {
      const remoteAudioTrack = user.audioTrack;
      remoteAudioTrack?.play();
    }
  });
};

export const joinCall = async (role: any, uid: any, channel: any) => {
  let rtc = { localAudioTrack: null as any, client: null as any };
  const appId = "66701574e10e4079b69531faa6c01029";
  if (!client) {
    client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  }

  let token = await fetchToken(uid, channel, role);

  await client.join(appId, channel, token, uid);
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  await client.publish([rtc.localAudioTrack]);
  await client.remoteUsers.forEach(async (user) => {
    await client.subscribe(user, "audio");
    console.log("subscribe success");

    if (user.audioTrack) {
      const remoteAudioTrack = user.audioTrack;
      remoteAudioTrack?.play();
    }
  });
  client.on("user-published", async (user, mediaType) => {
    await client.subscribe(user, mediaType);
    console.log("subscribe success");

    if (mediaType === "audio") {
      const remoteAudioTrack = user.audioTrack;
      console.log("audio");
      remoteAudioTrack?.play();
    }
  });
};

export const leaveCall = async () => {
  if (client) {
    await client.leave();
    await client.unpublish();
  }
};
