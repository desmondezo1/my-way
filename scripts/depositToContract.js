import Web3 from 'web3';
import BN from 'bn.js';
import dotenv from 'dotenv';
dotenv.config();
//import escrowContract from '../artifacts/contracts/escrow.sol/Escrow.json';

async function main() {

  const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_feedback","type":"string"}],"name":"feedbackLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_secret","type":"string"}],"name":"txInfo","type":"event"},{"inputs":[{"internalType":"bool","name":"_isConfirmed","type":"bool"},{"internalType":"address","name":"_vendor","type":"address"},{"internalType":"address","name":"_messenger","type":"address"}],"name":"confirmDelivery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_messenger","type":"address"},{"internalType":"string","name":"_secretHash","type":"string"}],"name":"depositToContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"address","name":"messenger","type":"address"}],"name":"getStagedMoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"__vendor","type":"address"},{"internalType":"address","name":"_messenger","type":"address"}],"name":"returnMoneyToVendor","outputs":[],"stateMutability":"nonpayable","type":"function"}] 
  const { HARMONY_PRIVATE_KEY } = process.env;
  const HMY_TESTNET_RPC_URL = 'https://api.s0.b.hmny.io';
  const contractAddress = '0x5FC78e3980884bE71134E82955514B8f92c0FA77';

  const web3 = new Web3(HMY_TESTNET_RPC_URL);
  
  //const id = await web3.eth.net.getId();

  const contract = new web3.eth.Contract(
    abi,
    contractAddress
  );

  const hmyMasterAccount = web3.eth.accounts.privateKeyToAccount(HARMONY_PRIVATE_KEY);
  await web3.eth.accounts.wallet.add(hmyMasterAccount);
  web3.eth.defaultAccount = hmyMasterAccount.address;

  const myAddress = web3.eth.defaultAccount;
  const gasPrice = new BN(await web3.eth.getGasPrice()).mul(new BN(1));
  const gasLimit = 6721900;

  const messenger = '0xc37f561147069ce254c586a66a9509c776b912b1';

  await contract.methods.depositToContract(messenger, "Oh yes it worked").send({
    from: myAddress,
    value: '1000000000000000000',
    gas: gasLimit
    
  });

  console.log(await contract.methods.contractOwner().call());

   

}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });