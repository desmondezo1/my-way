

import { ethers } from "ethers";
import ERC20ABI from "../scripts/assets/erc20-abi.json";
import dotenv from 'dotenv'


const appConnector = {

    checkForWallet : async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Please install metamask!");
                return;
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

    getWalletBalance : async (address) =>{
                // const provider = new ethers.providers.Web3Provider(ethereum);
                // // let bal = await provider.getBalance(address);
                // const signer = provider.getSigner();
                // const ONE = new ethers.Contract("0x03ff0ff224f904be3118461335064bb48df47938", ERC20ABI, provider);
                // let wallletBalance = await ONE.balanceOf(signer.address);
                // return wallletBalance;
                // // return {bal};
            },



};

export { appConnector };