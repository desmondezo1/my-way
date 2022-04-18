var ethers = require('ethers');

const { HARMONY_PRIVATE_KEY } = process.env;

async function main() {

    var provider = ethers.providers.getDefaultProvider('testnet');
    var address  = '0x5FC78e3980884bE71134E82955514B8f92c0FA77';
    var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_feedback","type":"string"}],"name":"feedbackLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_secret","type":"string"}],"name":"txInfo","type":"event"},{"inputs":[{"internalType":"bool","name":"_isConfirmed","type":"bool"},{"internalType":"address","name":"_vendor","type":"address"},{"internalType":"address","name":"_messenger","type":"address"}],"name":"confirmDelivery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_messenger","type":"address"},{"internalType":"string","name":"_secretHash","type":"string"}],"name":"depositToContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"vendor","type":"address"},{"internalType":"address","name":"messenger","type":"address"}],"name":"getStagedMoney","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"__vendor","type":"address"},{"internalType":"address","name":"_messenger","type":"address"}],"name":"returnMoneyToVendor","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    var privateKey = HARMONY_PRIVATE_KEY ;
    var wallet = new ethers.Wallet(privateKey, provider);
    var contract = new ethers.Contract(address, abi, wallet);

    console.log("I got here");

    var sendPromise = await contract.getStagedMoney(0xDBD06E7690F2c575129abD5552DaEB0055367305, 0x6b1f1940ea452c900de1f210d826df31d8dddfd5, { gasLimit : 10});

    
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });