import { ethers, providers } from "ethers";
import { supportedChains } from "../constants/supportedChains";
import { reverseUrl } from "./resolution";
import { throwError, updateConnectedUser } from "./storeInteract";
import { getChainFromStorage } from "./utils";
import { verifyProviderSync } from "./web3Chain";
import { clearWeb3Modal, web3ModalSingleton } from "./web3Modal";

// export const getWeb3Provider = () => {
//   return new Promise<providers.Web3Provider>(async (resolve, reject) => {
//     verifyProviderSync().catch(() => reject());
//     let provider;
//     let web3Provider;

//     if (web3ModalSingleton.provider !== null) {
//       provider = web3ModalSingleton.provider;
//     } else {
//       provider = await web3ModalSingleton.web3Modal.connect();
//       const web3Provider = new providers.Web3Provider(provider);

//       const signer = web3Provider.getSigner();
//       const address = await signer.getAddress();
//       const network = await web3Provider.getNetwork();
//       network._defaultProvider = null;
//       updateConnectedUser(address, network);
//       web3ModalSingleton.provider = provider;
//     }

//     if (web3ModalSingleton.web3Provider !== null) {
//       web3Provider = web3ModalSingleton.web3Provider;
//     } else {
//       web3Provider = new providers.Web3Provider(provider);
//       web3ModalSingleton.web3Provider = web3Provider;
//     }

//     resolve(web3Provider);
//   });
// };

// export const getConnectedProvider = async () => {
//   return new Promise<providers.Provider>(async (resolve, reject) => {
//     let provider;
//     let web3Provider;

//     if (web3ModalSingleton.provider !== null) {
//       provider = web3ModalSingleton.provider;
//     } else {
//       provider = await web3ModalSingleton.web3Modal.connect();
//       const web3Provider = new providers.Web3Provider(provider);

//       const signer = web3Provider.getSigner();
//       const address = await signer.getAddress();
//       const network = await web3Provider.getNetwork();
//       network._defaultProvider = null;
//       updateConnectedUser(address, network);
//       web3ModalSingleton.provider = provider;
//     }

//     if (web3ModalSingleton.web3Provider !== null) {
//       web3Provider = web3ModalSingleton.web3Provider;
//     } else {
//       web3Provider = new providers.Web3Provider(provider);
//       web3ModalSingleton.web3Provider = web3Provider;
//     }

//     resolve(provider);
//   });
// };

export const walletConnect = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    let provider = await web3ModalSingleton.web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);
    web3ModalSingleton.provider = provider;
    web3ModalSingleton.web3Provider = web3Provider as any;
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();
    network._defaultProvider = undefined;
    updateConnectedUser(address, network);
    resolve({ address, network });
  });
};

export const getConnectedProvider = ():
  | providers.ExternalProvider
  | undefined => {
  if (web3ModalSingleton.provider !== null) {
    return web3ModalSingleton.provider;
  } else {
    throwError("You are not connected");
    // throw new Error("!CONNECTED");
  }
};

// export const walletConnect = (): Promise<any> => {
//   return new Promise(async (resolve, reject) => {
//     const web3Provider = await getWeb3Provider();
//     const signer = web3Provider.getSigner();
//     const address = await signer.getAddress();
//     let network = await web3Provider.getNetwork();
//     const { name, chainId } = network;
//     network = { name, chainId };
//     resolve({ address, network });
//   });
// };

export const walletConnectIfCache = async () => {
  if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER") != null) {
    return walletConnect();
  }
  throw new Error("No Cache");
};

export const walletDisconnect = () => {
  if (web3ModalSingleton.web3Modal) {
    web3ModalSingleton.web3Modal.clearCachedProvider();
  }

  clearWeb3Modal();
  return;
};

export const getProviderWithoutSigner = () => {
  const chainId = getChainFromStorage();
  const provider = new ethers.providers.JsonRpcProvider(
    supportedChains[chainId].private_https_url
  );
  return provider;
};

export const getWssProviderWithoutSigner = () => {
  const chainId = getChainFromStorage();
  const provider =
    supportedChains[chainId].private_wss_url != ""
      ? new ethers.providers.WebSocketProvider(
          supportedChains[chainId].private_wss_url
        )
      : new ethers.providers.JsonRpcProvider(
          supportedChains[chainId].private_https_url
        );
  return provider;
};
