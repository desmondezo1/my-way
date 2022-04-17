

const main = async () => {
    const [owner, vendor, messenger] = await hre.ethers.getSigners();
    const escrowContractFactory = await hre.ethers.getContractFactory("Escrow");
    const escrowContract = await escrowContractFactory.deploy();
    await escrowContract.deployed();

    console.log("The contract address is:", escrowContract.address);
    console.log("The owner of this contract is:", owner.address);


    await escrowContract.depositToContract(messenger, "0x2dsdew3rf48uhe988");

   /* let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn;

    waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    for (let i=0; i<10; ++i){
        waveTxn = await waveContract.connect(randomPerson).wave();
    } 

    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();*/

    
};

const runMain = async () => {
    try {
        await main()
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();