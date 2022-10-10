import { io, Socket } from "socket.io-client";
import axios from "axios";
import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng";
let socket: Socket;
let publicKey: string;
let client: IAgoraRTCClient;

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
  let rtc = {
    localAudioTrack: null as any,
    client: null as any,
    localVideoTrack: null as any,
  };
  const appId = "66701574e10e4079b69531faa6c01029";
  if (!client) {
    client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    client.setClientRole("host");
  }

  let token = await fetchToken(uid, channel, role);

  await client.join(appId, channel, token, uid);
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
  await client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
  console.log("acceptedd");

  client.on("user-published", async (user, mediaType) => {
    await client.subscribe(user, mediaType);
    console.log("subscribe success");

    if (mediaType === "audio") {
      const remoteAudioTrack = user.audioTrack;
      remoteAudioTrack?.play();
    }
    if (mediaType === "video") {
      const remotePlayerContainer = document.getElementById(
        "video-call"
      ) as HTMLElement;

      const remoteVideoTrack = user.videoTrack;
      remoteVideoTrack?.play(remotePlayerContainer);
    }
  });
};

export const joinCall = async (role: any, uid: any, channel: any) => {
  let rtc = {
    localAudioTrack: null as any,
    client: null as any,
    localVideoTrack: null as any,
  };
  const appId = "66701574e10e4079b69531faa6c01029";
  if (!client) {
    client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    client.setClientRole("host");
  }

  let token = await fetchToken(uid, channel, role);

  await client.join(appId, channel, token, uid);
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
  await client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
  await client.publish([rtc.localAudioTrack]);
  await client.remoteUsers.forEach(async (user) => {
    await client.subscribe(user, "audio");
    console.log("subscribe success");

    if (user.audioTrack) {
      const remoteAudioTrack = user.audioTrack;
      remoteAudioTrack?.play();
    }
    if (user.videoTrack) {
      const remotePlayerContainer = document.getElementById(
        "video-call"
      ) as HTMLElement;

      const remoteVideoTrack = user.videoTrack;
      remoteVideoTrack?.play(remotePlayerContainer);
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
