import Prisma from '@prisma/client';
import express from 'express'


const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
// const express =  require('express');
const app = express();
const port = process.env.PORT || 4000 ;



app.listen(port,()=>{console.log(`App is running on port : ${port}`)});


app.get('/', async (req, res) =>{
    res.json({"Msg" : "App is running"});
})

app.get('/get-states', async (req, res) =>{
    const states = await prisma.states.findMany();
    res.json(states);
})

app.post('/send-package', async (req, res) =>{

})