export interface BaseAction {
  type: string;
  payload?: any;
}

export interface ChainCurrencyType {
  symbol: string;
  name: string;
  decimals: number;
  contractAddress: string;
  balance?: string;
  coinGeekoId: string;
}
export interface ChainType {
  name: string;
  short_name: string;
  chain: string;
  network: string;
  chain_id: string;
  chain_id_int: string;
  rpc_urls: string[];
  private_https_url: string;
  private_wss_url: string;
  icon_url: string;
  icon: any;
  block_explorer_url: string;
  native_currency: ChainCurrencyType;
  routers: any;
  routerUrls: any;
  buyCurrency: any;
  buyCurrencyDecimals: any;
  wrappedCoin: string;
  presaleFactory: any;
  eventEmitter: any;
  tokenMintingFee: string;
  antiBotFee: string;
  launchpadFixedFee: string;
  registerAddress: string;
  dividentTracker: string;
  launchpadRaisedFee: string;
  privateSaleRaisedFee: string;
  launchpadUniformFee: string;
  antiBotAddress: string;
  iterableMappingAddress: string;
  contestCreationFee: string;
  pandaLock: string;
  pandaStaking: string;
  pandaToken: string;
}

export interface PandaLock {
  tokenAddress: string;
  decimals: number;
  isLpToken: boolean;
  useAnotherOwner: boolean;
  owner: string;
  title: string;
  amount: number;
  vesting: boolean;
  tgeDate: number;
  tgePercent: string;
  cycle: string;
  cycleReleasePercent: string;
  lockTil: number;
}
