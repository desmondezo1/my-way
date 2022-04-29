import { states } from "./statesInNigeria.js";
// let states = require('./statesInNigeria');
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

const user_types = ['COMPANY','RECEIVER','COMMUTER'];
const prisma = new PrismaClient();

async function main(){
    for (const state of states) {
        await prisma.States.create({
            data: {state}
        })
    }

    for (const type of user_types) {
        await prisma.User_types.create({
            data: {type}
        })
    }


}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})