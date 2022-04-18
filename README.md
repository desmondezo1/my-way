# MyWay App

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


