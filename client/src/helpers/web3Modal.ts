import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { supportedChains } from "../constants/supportedChains";

const INFURA_ID = "648d90ab88bc4e62a60f164fa8543904";
// 0x1c61ea67d5d0b931ff9ed8a54f25ba2e0d5ce633;

const wcRpcOptions = {};
const cbRpcOptions = {};
export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: wcRpcOptions,
      qrcodeModalOpinfuraId: INFURA_ID,
      tions: {
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],
      },
    },
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "PandaSale - Launchpad",
      rpc: wcRpcOptions,

      darkMode: true,
    },
  },
};
export const web3ModalSingleton = {
  web3Modal: new Web3Modal({
    cacheProvider: true,
    providerOptions,
    theme: "dark",
  }),
  provider: null,
  web3Provider: null,
};

export const clearWeb3Modal = () => {
  web3ModalSingleton.web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    theme: "dark",
  });
  web3ModalSingleton.provider = null;
  web3ModalSingleton.web3Provider = null;
};
