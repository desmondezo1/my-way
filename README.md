<<<<<<< HEAD
# my-way
=======
# MyWay App

# DEMO VIDEO HERE - (1:25 MINS) https://youtu.be/s3EQCqL_Odc

This is a peer to peer decentralised logistics application, that uses the harmony one blockchain, to ensure business owner can securely send goods, from one point in nigeria to the order with the help of commuters.

# How to setup 

First run 

```shell
npm install
```

create your .env file from the example.env and add the following

```shell

ETHERSCAN_API_KEY=ABC123ABC123ABC123ABC123ABC123ABC1
ROPSTEN_URL=https://eth-ropsten.alchemyapi.io/v2/<YOUR ALCHEMY KEY>
PRIVATE_KEY=0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

```

# Setup your db

Ensure you have mysql running on your computer { XAMP, MAMP, WAMP }.

Then run the following

```shell

npx prisma migrate dev

OR

npx prisma migrate deploy

```

When your db tables have been creted from the migration you can now run

```shell

npm run start-project

```

this will start the React server and the node server

REACT at port :3000
Backend Node Port : 4000


# The Smart Contract info

The contract address is:

```shell

Testnet: 0x5fc78e3980884be71134e82955514b8f92c0fa77

```

See it on the explorer

```shell

https://explorer.pops.one/address/0x5fc78e3980884be71134e82955514b8f92c0fa77

```



>>>>>>> 8cc6f1754c52ac03d1fd1c88c3286abd815748b7
