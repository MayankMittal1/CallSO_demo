import { ethers } from "ethers";
import { ChainType } from "./types";

export const ChainTypeKeyArray = [
  "BSC",
  "ETHW",
  "KCC",
  "BSC-TEST",
  "DOGECHAIN",
  "SHIBCHAIN",
  "POLYGON",
] as const;

export type ChainTypeKey = typeof ChainTypeKeyArray[number];

export const initChain: ChainTypeKey = "ETHW";

type ChainTypeObject = {
  [k in ChainTypeKey]: ChainType;
};

export const supportedChains: ChainTypeObject = {
  BSC: {
    name: "BSC Mainnet",
    short_name: "BSC",
    chain: "BSC",
    network: "mainnet",
    chain_id: "0x38",
    chain_id_int: "56",
    rpc_urls: [
      "https://bsc-dataseed1.binance.org/",
      "https://bsc-dataseed2.binance.org/",
      "https://bsc-dataseed3.binance.org/",
    ],
    private_https_url: "https://bsc-dataseed1.binance.org",
    private_wss_url: "",
    icon_url:
      "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Binance-Coin-BNB-icon.png",
    icon: "bsc",
    block_explorer_url: "https://bscscan.com",
    native_currency: {
      symbol: "BNB",
      name: "Binance Coin",
      decimals: 18,
      contractAddress: "",
      coinGeekoId: "binancecoin",
    },
    routers: {
      PancakeSwap: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    },
    routerUrls: {
      PancakeSwap: "https://pancakeswap.finance",
    },
    buyCurrency: {
      BNB: ethers.constants.AddressZero,
      BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    },
    buyCurrencyDecimals: {
      BNB: 18,
      BUSD: 18,
    },
    wrappedCoin: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", //WBNB
    presaleFactory: "0x51cEA16b2E52574Be6757eE20ECCFC418c56a23b",
    eventEmitter: "0x0b6cA70b669911F7E475BeA87178274288e6E166",
    registerAddress: "0x1d37D9c38EEDbB7b9231C59A89a606CEe1787E91",
    antiBotAddress: "0xd29f1Ab182b7795D7E7042cDc107ef267910915F",
    dividentTracker: "",
    tokenMintingFee: "0.1",
    antiBotFee: "0.25",
    launchpadRaisedFee: "2",
    privateSaleRaisedFee: "2",
    launchpadUniformFee: "1",
    launchpadFixedFee: "0.25",
    contestCreationFee: "0.1",
    iterableMappingAddress: "0x713F9606bf868F6b25378CC9d3d0077BdE7fF8E5",
    pandaLock: "",
    pandaStaking: "",
    pandaToken: "",
  },
  DOGECHAIN: {
    name: "DogeChain Mainnet",
    short_name: "DogeChain",
    chain: "DOGECHAIN",
    network: "mainnet",
    chain_id: "0x7d0",
    chain_id_int: "2000",
    rpc_urls: ["https://rpc.dogechain.dog/"],
    // private_https_url: "https://rpc.dogechain.dog",
    // private_https_url: "http://54.171.157.166:8545",
    private_https_url: "/dc-rpc",
    // private_https_url:
    // "https://rpc.dcscan.org/?key=fc5E7E04a8bcfCfCa1601D8f8cE1a50",
    private_wss_url: "",
    icon_url:
      "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Binance-Coin-BNB-icon.png",
    icon: "dogechain",
    block_explorer_url: "https://explorer.dogechain.dog",
    native_currency: {
      symbol: "wDOGE",
      name: "DogeChain Coin",
      decimals: 18,
      contractAddress: "",
      coinGeekoId: "dogecoin",
    },
    routers: {
      Yodeswap: "0x72d85Ab47fBfc5E7E04a8bcfCa1601D8f8cE1a50",
      RadioShack: "0x55a5334d1a402383C5a8C622301ea00cc8Cd1681",
      KibbleSwap: "0x6258c967337d3faf0c2ba3adae5656ba95419d5f",
      // BoneSwap: "0x044d81b0808b6AFe69b8D0E1661d4bE71cCc63A8",
      // MoonRock: "0x6E722225B175b1141D5E4B59704D8d81861C9f28",
    },
    routerUrls: {
      DogeSwap: "https://dogeswap.org/#",
      RadioShack: "https://app.radioshack.org",
      Yodeswap: "https://yodeswap.dog/exchange",
      QuickSwap: "https://dogechain.quickswap.exchange/#",
      KibbleSwap: "https://www.kibbleswap.dog",
      Unidoge: "https://unidoge.exchange",
      SolarSwap: "https://solarshepardswap.solardex.finance",
      BoneSwap: "https://exchange.boneswap.dog/#",
      MoonRock: "https://rockswap.moonrock.finance/#",
    },
    buyCurrency: {
      wDOGE: ethers.constants.AddressZero,
      DC: "0x7b4328c127b85369d9f82ca0503b000d09cf9180",
      USDT: "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
      USDC: "0x765277eebeca2e31912c9946eae1021199b39c61",
    },
    buyCurrencyDecimals: {
      wDOGE: 18,
      DC: 18,
      USDT: 6,
      USDC: 6,
    },
    wrappedCoin: "0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101", //WBNB
    // presaleFactory: "0x0e9a84C014129038db4f03B872AF0a1Eac636081",
    // eventEmitter: "0x6A38498cFc456b14beBa384539d149aCB7458a06",
    // registerAddress: "0xd0011BBb666669862cAcC0A83E69B3AFE68ab535",
    // antiBotAddress: "0x18380CA2C704A58FB9908D80c22DBf004D543E51",
    // dividentTracker: "",
    // tokenMintingFee: "0", //250
    // antiBotFee: "1", //1000
    // launchpadRaisedFee: "2.5",
    // privateSaleRaisedFee: "2",
    // launchpadUniformFee: "1.5",
    // launchpadFixedFee: "1", //1000
    // contestCreationFee: "1", //250
    presaleFactory: "0x641d48E5c3C019118d7DD6f55336e9245Eb053d0",
    eventEmitter: "0xCe82b367C1485278ecffD57e724e1d455ce0d635",
    registerAddress: "0x61123c576A1980A2976298aecFDf1A6d98E86c68",
    antiBotAddress: "0xAAD608899eD545132CB335C4642fF81411A14BdC",
    dividentTracker: "",
    tokenMintingFee: "250", //250
    antiBotFee: "500", //500
    launchpadRaisedFee: "2.5",
    privateSaleRaisedFee: "2",
    launchpadUniformFee: "1.5",
    launchpadFixedFee: "1000", //1000
    contestCreationFee: "250", //250
    iterableMappingAddress: "0xcFF15055c04Cd00744Da56690f55C27237862771",
    pandaLock: "",
    pandaToken: "",
    pandaStaking: "",
  },
  SHIBCHAIN: {
    name: "ShibChain Mainnet",
    short_name: "ShibChain",
    chain: "SHIBCHAIN",
    network: "mainnet",
    chain_id: "0x783",
    chain_id_int: "1923",
    rpc_urls: ["https://rpc.shibchain.app/"],
    private_https_url: "https://rpc.shibchain.app/",
    private_wss_url: "",
    icon_url: "",
    icon: "shibchain",
    block_explorer_url: "https://explorer.shibchain.app",
    native_currency: {
      symbol: "wSHIB",
      name: "ShibChain Coin",
      decimals: 18,
      contractAddress: "",
      coinGeekoId: "shiba-inu",
    },
    routers: {
      ShibSwap: "0xB0C87c9c9992a19660A3567D144a9AF6a9066216",
    },
    routerUrls: {
      ShibSwap: "https://shibswap.shibchain.app/#",
    },
    buyCurrency: {
      wSHIB: ethers.constants.AddressZero,
    },
    buyCurrencyDecimals: {
      wDOGE: 18,
    },
    wrappedCoin: "0x94d0DcA5eAE9a6987F15ce91F14154E5b0FDD82F", //WBNB
    presaleFactory: "0xaB102ca0D25e869524D731BaD8e71c76D39eAf45",
    eventEmitter: "0x2BF11e599a4ae9EEBbf2DE561C23d5f85406D01B",
    registerAddress: "0xF5615A5d5a74A6DEc17bE0434185B03d4f70854b",
    antiBotAddress: "",
    dividentTracker: "",
    tokenMintingFee: "1000000", //250
    antiBotFee: "5000000", //500
    launchpadRaisedFee: "2.5",
    privateSaleRaisedFee: "2",
    launchpadUniformFee: "1.5",
    launchpadFixedFee: "1000000", //1000
    contestCreationFee: "1000000", //250
    iterableMappingAddress: "0x3Ec4B316Fcd48078573CfCc07CAcF387A01A90ae",
    pandaLock: "",
    pandaStaking: "",
    pandaToken: "",
  },
  ETHW: {
    name: "ETH-PoW",
    short_name: "ETHW",
    chain: "ETHW",
    network: "mainnet",
    chain_id: "0x2711",
    chain_id_int: "10001",
    rpc_urls: ["https://mainnet.ethereumpow.org/"],
    private_https_url: "https://ethereumpow.kyberengineering.io",
    private_wss_url: "",
    icon_url: "https://ethereumpow.org/images/logo-dark.png",
    icon: "ethw",
    block_explorer_url: "https://www.oklink.com/en/ethw",
    native_currency: {
      symbol: "ETHW",
      name: "ETHW",
      decimals: 18,
      contractAddress: "",
      coinGeekoId: "ethereum-pow-iou",
    },
    routers: {
      UniWswap: "0x633e494C22D163F798b25b0264b92Ac612645731",
      PowSwap: "0x6851e767Aaa9C4674Fe8cAE95AFCc819b7Fb0403",
      LFGSwap: "0x4f381d5fF61ad1D0eC355fEd2Ac4000eA1e67854",
    },
    routerUrls: {
      UniWswap: "https://app.uniwswap.com/#",
      PowSwap: "https://app.powswap.io/#",
      KyberSwap: "https://kyberswap.com",
      LFGSwap: "https://app.lfgswap.finance",
    },
    buyCurrency: {
      ETHW: ethers.constants.AddressZero,
    },
    buyCurrencyDecimals: {
      ETHW: 18,
    },
    wrappedCoin: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", //WBNB
    presaleFactory: "0x90c3A3d2f418a9d3dDc633a0B6012C959Ad622bB",
    eventEmitter: "0x314e2124f84E689ca00A0c66a9309C1f0Da0762E",
    registerAddress: "0x02b451dFD993E1CA369962a478dEB67E0D6c2616",
    antiBotAddress: "0x25691E8E51DE32e7FA077BF68D465a0872cfA39e",
    dividentTracker: "",
    tokenMintingFee: "2.5", //250
    antiBotFee: "5", //500
    launchpadRaisedFee: "2.5",
    privateSaleRaisedFee: "2",
    launchpadUniformFee: "1.5",
    launchpadFixedFee: "10", //1000
    contestCreationFee: "5", //250
    iterableMappingAddress: "0x3DCAF92A4ebF9f1691c3E39d56a77E5a31c5C685",
    pandaLock: "",
    pandaStaking: "",
    pandaToken: "",
  },
  POLYGON: {
    name: "Polygon Mainnet",
    short_name: "Polygon",
    chain: "POLYGON",
    network: "mainnet",
    chain_id: "0x89",
    chain_id_int: "137",
    rpc_urls: ["https://polygonapi.terminet.io/rpc"],
    private_https_url:
      "https://matic.getblock.io/mainnet/?api_key=2ef28259-8baf-46c2-a74a-59e23d9fbec4",
    // private_https_url: apiRoot + "/dc-rpc",
    private_wss_url: "",
    icon_url: "",
    icon: "polygon",
    block_explorer_url: "https://polygonscan.com",
    native_currency: {
      symbol: "MATIC",
      name: "MATIC",
      decimals: 18,
      contractAddress: "",
      coinGeekoId: "matic-network",
    },
    routers: {
      Quickswap: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
    },
    routerUrls: {
      Quickswap: "https://quickswap.exchange/#",
    },
    buyCurrency: {
      MATIC: ethers.constants.AddressZero,
    },
    buyCurrencyDecimals: {
      MATIC: 18,
    },
    wrappedCoin: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", //WBNB

    presaleFactory: "0x25691E8E51DE32e7FA077BF68D465a0872cfA39e",
    eventEmitter: "0x638334EEED32bEebF90C42c9D3b268afF12db45C",
    registerAddress: "0x1AdF2d11fbdeebe8941B00d7036664a010b76d10",
    antiBotAddress: "0x6954e547302cFcD68556C657249eF8b154eb0fD9",
    dividentTracker: "",
    tokenMintingFee: "25", //250
    antiBotFee: "25", //500
    launchpadRaisedFee: "2",
    privateSaleRaisedFee: "2",
    launchpadUniformFee: "1",
    launchpadFixedFee: "50", //1000
    contestCreationFee: "25", //250
    iterableMappingAddress: "0x68FeDe0c0A2EdB490765916E53cc0e1b527ce07c",
    pandaLock: "",
    pandaStaking: "",
    pandaToken: "",
  },
  // ETC: {
  //   name: "Ethereum Classic",
  //   short_name: "Ethereum Classic",
  //   chain: "ETC",
  //   network: "mainnet",
  //   chain_id: "0x3d",
  //   chain_id_int: "61",
  //   rpc_urls: ["https://www.ethercluster.com/etc"],
  //   private_https_url: apiRoot + "/etc-rpc",
  //   private_wss_url: "",
  //   icon_url: "",
  //   icon: ethClassic,
  //   block_explorer_url: "https://blockscout.com/etc/mainnet",
  //   native_currency: {
  //     symbol: "ETC",
  //     name: "Ethereum Classic",
  //     decimals: 18,
  //     contractAddress: "",
  //     coinGeekoId: "ethereum-classic",
  //   },
  //   routers: {
  //     HebeSwap: "0xEcBcF5C7aF4c323947CFE982940BA7c9fd207e2b",
  //   },
  //   routerUrls: {
  //     HebeSwap: "https://app.hebeswap.com/#",
  //   },
  //   buyCurrency: {
  //     ETC: ethers.constants.AddressZero,
  //   },
  //   buyCurrencyDecimals: {
  //     ETC: 18,
  //   },
  //   wrappedCoin: "0x82A618305706B14e7bcf2592D4B9324A366b6dAd", //WBNB

  //   presaleFactory: "0x67764aE8D95c378D23B4016944BB601DC5f6a9Bd",
  //   eventEmitter: "0x0722780aD3c122A639675dFBd9Bad77F400B2B7A",
  //   registerAddress: "0x40b439a431923A0DF806B85718130d6575F5F0A5",

  //   antiBotAddress: "0x48aBa15b372449B566D84D041d470616958d3B73",

  //   dividentTracker: "",
  //   tokenMintingFee: "0.01",
  //   antiBotFee: "0.01",
  //   launchpadRaisedFee: "2.5",
  //   privateSaleRaisedFee: "2",
  //   launchpadUniformFee: "1.5",
  //   launchpadFixedFee: "0.01",
  //   contestCreationFee: "0.01",
  //   iterableMappingAddress: "",
  //   pandaLock: "",
  // },
  "BSC-TEST": {
    name: "BSC Testnet",
    short_name: "BSC Testnet",
    chain: "BSC-TEST",
    network: "testnet",
    chain_id: "0x61",
    chain_id_int: "97",
    rpc_urls: [
      "https://data-seed-prebsc-1-s1.binance.org:8545/",
      "https://data-seed-prebsc-2-s1.binance.org:8545/",
      "https://data-seed-prebsc-1-s2.binance.org:8545/",
    ],
    private_https_url: "https://data-seed-prebsc-1-s2.binance.org:8545/",
    private_wss_url:
      "wss://ws-nd-662-649-070.p2pify.com/b534ae32576b4d520af2158db9443216",
    icon_url:
      "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Binance-Coin-BNB-icon.png",
    icon: "bsc",
    block_explorer_url: "https://testnet.bscscan.com",
    native_currency: {
      symbol: "BNB",
      name: "Binance Coin",
      decimals: 18,
      contractAddress: "",
      coinGeekoId: "binancecoin",
    },
    routers: {
      "PancakeSwap Testnet": "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
      "BakerySwap Testnet": "0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F",
    },
    routerUrls: {
      "Pancakeswap Testnet": "https://bsc.pancake.kiemtienonline360.com/#",
      "PancakeSwap Testnet": "https://bsc.pancake.kiemtienonline360.com/#",
      "BakerySwap Testnet": "https://www.bakeryswap.org/#",
      "PinkSwap Testnet": "https://test-swap.pinksale.finance/#",
    },
    buyCurrency: {
      BNB: ethers.constants.AddressZero,
      BUSD: "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
      USDT: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
    },
    buyCurrencyDecimals: {
      BNB: 18,
    },
    wrappedCoin: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
    presaleFactory: "0xD8F48e17495688251EaaA37a913C434Cb4305561",
    eventEmitter: "0x2A24754b5ed752958c3aE24277Dc9ECA3fca30b4",
    registerAddress: "0x9bd0065d04221e86e637eD0E5674E3322bcec097",
    antiBotAddress: "0xB63864705aebfF88f3e238Db98C2EBf775220e60",
    dividentTracker: "0xc5FC583e40063C5e9AD89142778B0C73031Cd77b",
    tokenMintingFee: "0.01",
    antiBotFee: "0.01",
    launchpadRaisedFee: "2.5",
    privateSaleRaisedFee: "2",
    launchpadUniformFee: "1.5",
    launchpadFixedFee: "0.01",
    contestCreationFee: "0.01",
    iterableMappingAddress: "0x46cd124852D0dF487aCdF9B7dD5B7B48b47E616C",
    pandaLock: "0xa0b23460c88c8b5192083E927e8b9C39eAC42B5c",
    pandaStaking: "0xa269DAEC45B2d6c8E90e3356ED3223aa9b908C82",
    pandaToken: "0xb50494E26969D6651Cb3DC5b7CD133b4F3479aE9",
  },
  KCC: {
    name: "KCC Mainnet",
    short_name: "KCC",
    chain: "KCC",
    network: "mainnet",
    chain_id: "0x141",
    chain_id_int: "321",
    rpc_urls: ["https://rpc-mainnet.kcc.network/"],
    private_https_url: "https://rpc-mainnet.kcc.network/",
    private_wss_url: "",
    icon_url: "https://i.imgur.com/RstOTgb.png",
    icon: "KKC",
    block_explorer_url: "https://explorer.kcc.io/",
    native_currency: {
      symbol: "KCS",
      name: "KuCoin",
      decimals: 18,
      contractAddress: "",
      coinGeekoId: "kucoin-shares",
    },
    routers: {
      MojitoSwap: "0x8c8067ed3bc19acce28c1953bfc18dc85a2127f7",
    },
    routerUrls: {
      MojitoSwap: "https://app.mojitoswap.finance",
    },
    buyCurrency: {
      KCS: ethers.constants.AddressZero,
    },
    buyCurrencyDecimals: {
      KCS: 18,
    },
    wrappedCoin: "0x4446fc4eb47f2f6586f9faab68b3498f86c07521", //WBNB
    presaleFactory: "0xaB102ca0D25e869524D731BaD8e71c76D39eAf45",
    eventEmitter: "0x2BF11e599a4ae9EEBbf2DE561C23d5f85406D01B",
    registerAddress: "0xF5615A5d5a74A6DEc17bE0434185B03d4f70854b",
    antiBotAddress: "0x48aBa15b372449B566D84D041d470616958d3B73",
    dividentTracker: "",
    tokenMintingFee: "1", //250
    antiBotFee: "5", //500
    launchpadRaisedFee: "2.5",
    privateSaleRaisedFee: "2",
    launchpadUniformFee: "1.5",
    launchpadFixedFee: "5", //1000
    contestCreationFee: "2.5", //250
    iterableMappingAddress: "0xf11C1f17cef489857b638FdDa21700C9DED90C49",
    pandaLock: "",
    pandaStaking: "",
    pandaToken: "",
  },
  // "ETH-TEST": {
  //   name: "Goerli Testnet",
  //   short_name: "ETH Testnet",
  //   chain: "ETH-TEST",
  //   network: "testnet",
  //   chain_id: "0x5",
  //   chain_id_int: "5",
  //   rpc_urls: ["https://goerli.infura.io/v3/"],
  //   private_https_url:
  //     "https://eth-goerli.g.alchemy.com/v2/2ikMC64u0H5qe3cZAPkwXG3EyJbONv8a",
  //   private_wss_url:
  //     "wss://eth-goerli.g.alchemy.com/v2/2ikMC64u0H5qe3cZAPkwXG3EyJbONv8a",
  //   icon_url: "",
  //   icon: eth,
  //   block_explorer_url: "https://goerli.etherscan.io/",
  //   native_currency: {
  //     symbol: "ETH",
  //     name: "Ethereum",
  //     decimals: 18,
  //     contractAddress: "",
  //     coinGeekoId: "ethereum",
  //   },
  //   routers: {
  //     "Uniswap Testnet": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  //   },
  //   routerUrls: {
  //     "Uniswap Testnet": "https://app.uniswap.org/#",
  //   },
  //   buyCurrency: {
  //     ETH: ethers.constants.AddressZero,
  //     WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  //   },
  //   buyCurrencyDecimals: {
  //     ETH: 18,
  //   },
  //   wrappedCoin: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  //   presaleFactory: "0x3Ec4B316Fcd48078573CfCc07CAcF387A01A90ae",
  //   eventEmitter: "0xBFAF76365B66a0AEA5FD7A02a46b31D83ED8e038",
  //   antiBotAddress: "0xf8ebb259Df372c2EEb6D2ad0aD01366092F9eEC6",
  //   registerAddress: "0x955705cE01e181a44d9bfc09bd4e711414965898",
  //   dividentTracker: "",
  //   tokenMintingFee: "0.001",
  //   antiBotFee: "0.001",
  //   launchpadFixedFee: "0.001",
  //   privateSaleRaisedFee: "2.5",
  //   launchpadRaisedFee: "2.5",
  //   launchpadUniformFee: "1.5",
  //   contestCreationFee: "0.001",
  // },

  // "CRO-TEST": {
  //   name: "Cronos Testnet",
  //   short_name: "CRO Testnet",
  //   chain: "CRO-TEST",
  //   network: "testnet",
  //   chain_id: "0x152",
  //   chain_id_int: "338",
  //   rpc_urls: ["https://evm-t3.cronos.org"],
  //   private_https_url: "https://evm-t3.cronos.org",
  //   private_wss_url:
  //     "wss://ws-nd-662-649-070.p2pify.com/b534ae32576b4d520af2158db9443216",
  //   icon_url: "",
  //   icon: cro,
  //   block_explorer_url: "https://cronos.org/explorer/testnet3",
  //   native_currency: {
  //     symbol: "tCRO",
  //     name: "Cronos Coin",
  //     decimals: 18,
  //     contractAddress: "",
  //     coinGeekoId: "crypto-com-chain",
  //   },
  //   routers: {
  //     "HeraSwap Testnet": "0x085d8C985C73Fbb425398209d864Addd062fF3c1",
  //   },
  //   routerUrls: {
  //     "HeraSwap Testnet": "https://heraswap.kiemtienonline360.com/#",
  //   },
  //   buyCurrency: {
  //     tCRO: ethers.constants.AddressZero,
  //     USDT: "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684",
  //   },
  //   buyCurrencyDecimals: {
  //     tCRO: 18,
  //   },
  //   wrappedCoin: "0x4fea4C520f9c4a02993d64994280C24790444576",
  //   presaleFactory: "0xFdC0d35BbF7C093499Fec2ad51Ae30C06F53f9ee",
  //   eventEmitter: "0x5CE581EAceb849FC4125348d31BB8FdF3b579574",
  //   antiBotAddress: "0x6Fc18137c139F61EbE95cfa758366DFBF9d2C6d6",
  //   registerAddress: "0xD47b4bC680c4bCc56aAdA93EE02C92b9330A2bde",
  //   dividentTracker: "",
  //   tokenMintingFee: "1",
  //   antiBotFee: "1",
  //   launchpadFixedFee: "1",
  //   privateSaleRaisedFee: "2.5",
  //   launchpadRaisedFee: "2.5",
  //   launchpadUniformFee: "1.5",
  //   contestCreationFee: "1",
  // },
};

export const getChain = (chain: ChainTypeKey) => supportedChains[chain];

// export const getChainFromChainId = (chainId: string): ChainType => {
//   // console.log({ chainId });
//   let foundChain: ChainType;
//   Object.keys(supportedChains).forEach((chainKey) => {
//     if (
//       supportedChains[chainKey].chain_id == chainId.toLowerCase() ||
//       supportedChains[chainKey].chain_id_int == chainId
//     ) {
//       foundChain = supportedChains[chainKey];
//     }
//   });
//   return foundChain;
// };

export const getNameAndIcon = (chainData: ChainType) => {
  return {
    name: chainData.name,
    shortName: chainData.short_name,
    Symbol: chainData.chain,
    icon: chainData.icon_url,
  };
};

export const getMainnets = (chainDatas: ChainType[]) => {
  return chainDatas.filter((chainData) => chainData.network !== "testnet");
};

export const getTestnets = (chainDatas: ChainType[]) => {
  return chainDatas.filter((chainData) => chainData.network === "testnet");
};
