async function main() {
    const Web3 = require('web3');
    const BN = require('bn.js');

    HMY_PRIVATE_KEY = 'fb81aad2da237f9ecfd98b799bbd7e6d76dfe8d423a4694d2f0a15cbfd87ed65';
    HMY_TESTNET_RPC_URL = 'https://api.s0.b.hmny.io';

    const web3 = new Web3(HMY_TESTNET_RPC_URL);

    let hmyMasterAccount = web3.eth.accounts.privateKeyToAccount(HMY_PRIVATE_KEY);
    web3.eth.accounts.wallet.add(hmyMasterAccount);
    web3.eth.defaultAccount = hmyMasterAccount.address

    const myAddress = web3.eth.defaultAccount;
    console.log('My address: ', myAddress)

    const balance = await web3.eth.getBalance(myAddress);
    console.log('My balance: ', balance / 1e18)

    const gasPrice = new BN( await web3.eth.getGasPrice()).mul(new BN(1));
    const gasLimit = 67219000;

    const value = 1 * 1e18; // 0.5 ONE

    const from = web3.eth.defaultAccount;
    const to = '0x5FC78e3980884bE71134E82955514B8f92c0FA77'  //newAccount.address; // account was created on prev step

    const result = await web3.eth
        .sendTransaction({ from, to, value, gasPrice, gasLimit })
        .on('error', console.error);
        
    console.log(`Send tx: ${result.transactionHash} result: `, result.status);

    const newAddrBalance = await web3.eth.getBalance(myAddress);
    console.log('My account balance is now: ', newAddrBalance / 1e18);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });