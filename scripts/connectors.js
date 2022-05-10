

import { providers, ethers } from "ethers";
import ERC20ABI from "../scripts/assets/erc20-abi.json";
// import dotenv from 'dotenv'
import WalletConnectProvider from "@walletconnect/web3-provider";

// const { Harmony } = require('@harmony-js/core');
// const {
//     ChainID,
//     ChainType,
//     hexToNumber,
//     numberToHex,
//     fromWei,
//     Units,
//     Unit,
//   } = require('@harmony-js/utils');
//  Create WalletConnect Provider



// export const walletconnect = new WalletConnectConnector({
//     rpc: {
//       1: NETWORK_URL,
//       [ChainId.HARMONY_MAINNET]: 'https://api.s0.t.hmny.io/',
//       [ChainId.HARMONY_TESTNET]: 'https://api.s0.b.hmny.io'
//     },
//     bridge: 'https://bridge.walletconnect.org',
//     qrcode: true,
//     supportedChainIds: [
//       ChainId.HARMONY_MAINNET, // harmony
//       ChainId.HARMONY_TESTNET // harmony testnet
//     ]
//   })
// import WalletConnectProvider from "./../node_modules/web3";
// dotenv.config();

// const { INFURAID } = process.env;

const appConnector = {

    checkForWallet : async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Please install metamask!");
                return false;
            } else {
                console.log("We have the ethereum object", ethereum);
            }

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                return account;
            } else {
                console.log("No authorized account found");
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    },

    connectWallet: async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                // appConnector.connectWalletWithWalletConnect();
                alert("You need Metamask to use this Site, Please install MetaMask ☺️, Thank you!");
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            let bal = await appConnector.getWalletBalance( accounts[0] );
            console.log(bal);
            console.log("Connected", accounts[0]);
            return accounts[0];

        } catch (error) {
            console.log(error);
        }
    },
    connectWithWalletConnect : async () => {
        try {
            console.log('started here');
            const provider = new WalletConnectProvider({
                rpc: {
                1666700000: "https://api.s0.b.hmny.io",
                1666700001: "https://api.s1.b.hmny.io",
                1666700002: "https://api.s2.b.hmny.io",
                },
            });
            
            await provider.enable();

            //  Wrap with Web3Provider from ethers.js
            const web3Provider = new providers.Web3Provider(provider);
            const accounts = await web3Provider.eth.getAccounts();
            console.log(accounts);
        } catch (error) {
            console.log({error})
        }
        
    },

    getWalletBalance : async (address) =>{
                // const provider = new ethers.providers.Web3Provider(ethereum);
                // // let bal = await provider.getBalance(address);
                // const signer = provider.getSigner();
                // const ONE = new ethers.Contract("0x03ff0ff224f904be3118461335064bb48df47938", ERC20ABI, provider);
                // let wallletBalance = await ONE.balanceOf(signer.address);
                // return wallletBalance;
                // // return {bal};
            },
    // connectWalletWithWalletConnect : async () => {
    //     const provider = new WalletConnectProvider({
    //         infuraId: INFURAID,
    //       });
    //       await provider.enable();
    //     //   const web3Provider = new providers.Web3Provider(provider);
    // }


};

export { appConnector };