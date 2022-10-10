import { web3ModalSingleton } from "./web3Modal";

import { ChainType } from "../constants/types";

import { getConnectedProvider } from "./web3Auth";
import { throwError } from "./storeInteract";
import {
  supportedChains,
} from "../constants/supportedChains";
import {
  changeChainQueryAndReload,
  getChainFromKey,
  getChainFromStorage,
} from "./utils";
import { ethers, providers } from "ethers";

interface AddEthereumChainParameter {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

export const verifyProviderSync = async (): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    const stateChain = getChainFromKey(getChainFromStorage());
    const chainId = await getProviderChainId();
    if (
      (stateChain.chain_id == chainId || stateChain.chain_id_int == chainId) &&
      chainId
    ) {
      resolve();
    } else if (chainId) {
      reject();
    }
    // if (stateChain.chain_id != chainId) {
    //   try {
    //     await requestChainChange(stateChain);
    //     window.location.reload();
    //   } catch (err) {
    //     throw Error("Invalid Chain");
    //   }
    // }
  });
};

// export const validateChainId = (chainId: string) => {
//   let foundChain: ChainType;
//   Object.keys(supportedChains).forEach((chainKey) => {
//     if (
//       (supportedChains as any)[chainKey].chain_id == chainId ||
//       supportedChains as any )chainKey].chain_id_int == chainId
//     )
//       foundChain = supportedChains[chainKey];
//   });
//   return foundChain;
// };

let isAllowed = true;
// export const handleChainFromProvider = async (
//   chainId: string,
//   currentChain: ChainType,
//   query: URLSearchParams,
//   history: any,
//   updateWallet: boolean
// ) => {
//   const newChain = getChainFromChainId(chainId);
//   if (!newChain) {
//     // throwError("Unsupported network");
//   }

//   if (newChain && isAllowed) {
//     if (updateWallet && chainId != currentChain.chain_id) {
//       isAllowed = false;
//       changeChainAndUpdateURL(currentChain.chain_id, query, history);
//     } else if (chainId != currentChain.chain_id) {
//       changeChainQueryAndReload(query, history, newChain);
//     }
//   } else {
//     // throwError("Please switch back to any of the supported networks.");
//   }
// };

// export const setProviderChainListner = async (
//   currentChain: ChainType,
//   query: URLSearchParams,
//   history: any
// ) => {
//   try {
//     const provider: any = getConnectedProvider();

//     getProviderChainId().then((chainId: string) => {
//       handleChainFromProvider(chainId, currentChain, query, history, true);
//     });
//     provider.on("chainChanged", (chainId: string) => {
//       handleChainFromProvider(chainId, currentChain, query, history, false);
//     });

//     provider.on("accountsChanged", function () {
//       window.location.reload();
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

export const getProviderChainId = async () => {
  try {
    const provider: any = getConnectedProvider();
    const chainId = await provider.request({ method: "eth_chainId" });
    return chainId;
  } catch (err) {}
};

// export const changeChainAndUpdateURL = async (
//   chainId: string,
//   query: URLSearchParams,
//   history: any
// ) => {
//   const newChain = getChainFromChainId(chainId);
//   await requestChainChange(newChain);
//   changeChainQueryAndReload(query, history, newChain);
// };

export const requestChainChange = async (chain: ChainType) => {
  const provider: any = getConnectedProvider();
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chain.chain_id }],
    });
  } catch (switchError: any) {
    if (switchError.code === 4902) {
      const newChain: AddEthereumChainParameter = {
        chainId: chain.chain_id,
        chainName: chain.name,
        rpcUrls: chain.rpc_urls,
        blockExplorerUrls: [chain.block_explorer_url],
        nativeCurrency: {
          name: chain.native_currency.name,
          symbol: chain.native_currency.symbol,
          decimals: chain.native_currency.decimals,
        },
      };
      try {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [newChain],
        });
      } catch (addError: any) {
        console.error(addError);
        throw new Error(addError);
      }
    }
    throwError("Change network in wallet");
    throw new Error(switchError);
  }
};

export const addCoinToWallet = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimal: string,
  logoUrl: string
) => {
  const ethereum = window.ethereum;
  try {
    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimal,
        },
      },
    });
  } catch (error) {
    throwError("Cannot add token");
    console.error(error);
  }
};
