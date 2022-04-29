// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

import { ethers } from "hardhat"

async function main() {
  const [deployer] = await ethers.getSigners();

  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const myWayReady = await ethers.getContractFactory("Escrow");
  const myWayEscrow = await myWayReady.deploy();

  console.log("Your contract address:", myWayEscrow.address);


  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });