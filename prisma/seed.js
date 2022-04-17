import { states } from "./statesInNigeria.js";
// let states = require('./statesInNigeria');
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;


const prisma = new PrismaClient();

async function main(){
    for (const state of states) {
        await prisma.States.create({
            data: {state}
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})