import {
  ChainTypeKey,
  ChainTypeKeyArray,
  initChain,
  supportedChains,
} from "../constants/supportedChains";
import { ChainType } from "../constants/types";
import {ethers} from "ethers";

export function ellipseAddress(address = "", width = 10): string {
  if (!address) {
    return "";
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}
export const getChainFromStorage = () => {
  const validChain: ChainTypeKey = ChainTypeKeyArray.find(
    (validType) => validType === localStorage.getItem("current_Chain")
  );
  if (validChain) {
    return validChain;
  } else {
    return initChain;
  }
};

export const getChainFromKey = (chainQuery: ChainTypeKey): ChainType => {
  const validChainKey: ChainTypeKey = ChainTypeKeyArray.find(
    (validType) => validType === chainQuery
  );
  if (validChainKey) {
    return supportedChains[validChainKey];
  } else {
    return supportedChains[initChain];
  }
};

export const setChainToStorage = (chain: ChainTypeKey) => {
  localStorage.setItem("current_Chain", chain);
};

export const getChainFromQuery = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get("chain"),
  });

  let value: string = params["chain"];

  const validQuey = ChainTypeKeyArray.find((validType) => validType === value);
  const validStorage = ChainTypeKeyArray.find(
    (validType) => validType === getChainFromStorage()
  );
  if (validQuey) {
    setChainToStorage(validQuey);
    return validQuey;
  } else if (validStorage) {
    return validStorage;
  } else {
    return initChain;
  }
};

export const changeChainQueryAndReload = (
  query: URLSearchParams,
  history: any,
  newChain: any
) => {
  query.set("chain", newChain.chain);
  history.push({
    search: "?" + query.toString(),
  });
  setChainToStorage(newChain.chain);
  window.location.reload();
};

export const getReferralCodeFromUrl = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get("r"),
  });

  let value: string = params["chain"];

  return value;
};

export const getRandomNumber = (): number => {
  var crypto = window.crypto;
  var typedArray = new Uint16Array(1);
  crypto.getRandomValues(typedArray);
  return typedArray[0] / (Math.pow(2, 16) - 1);
};

export const getParamFromUrl = (urlString: string, param: string) => {
  var url = new URL(urlString);
  var c = url.searchParams.get(param);
  return c;
};

export const minuteParser = (min: number) => {
  if (min < 60) {
    return `${min} minutes`;
  } else if (min < 1440) {
    return `${parseFloat((min / 60).toFixed(2))} hours`;
  } else {
    return `${parseFloat((min / 1440).toFixed(2))} days`;
  }
};

export const deepCopy = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const deepCopyAndUpdate = (obj, key, newVal) => {
  const newObj = JSON.parse(JSON.stringify(obj));
  newObj[key] = newVal;
  return newObj;
};

export const isAddress = (address: string) => {
  return ethers.utils.isAddress(address);
}