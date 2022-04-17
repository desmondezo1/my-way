import Prisma from '@prisma/client';
import express from 'express'


const { PrismaClient } = Prisma;
const prisma = new PrismaClient();
// const express =  require('express');
const app = express();
const port = process.env.PORT || 4000 ;


app.use(express.json());



app.listen(port,()=>{console.log(`App is running on port : ${port}`)});


app.get('/', async (req, res) =>{
    res.json({"Msg" : "App is running"});
})

app.get('/get-states', async (req, res) =>{
    const states = await prisma.states.findMany();
    res.json(states);
})

app.post('/create-order', async (req, res) =>{
 
    const {
        senderBusinessName,
        senderFirstname,
        senderLastname,
        senderPhoneNumber,
        senderEmail,
        receiverPhoneNumber,
        receiverEmail,
        receiverFirstname,
        receiverLastname,
        fairPrice,
        numberOfItems
    } = req.body;

    try {
        //create receiver user
        const userReceiver = await prisma.users.create({
            data: {
                first_name : receiverFirstname,
                last_name: receiverLastname,
                email: receiverEmail,
                phone: receiverPhoneNumber,
                user_type: "RECEIVER",
                nin: "null",
                bvn : "null",
                // wallet: 1,
            }
        });
    } catch (error) {
        console.log(error);
    }
 
    try {
        
        //create user company
        const usercomp = await prisma.users.create({
            data: {
                first_name : senderFirstname,
                last_name: senderLastname,
                email: senderEmail,
                phone: senderPhoneNumber,
                user_type: "COMPANY",
                nin: "null",
                bvn : "null",
                // wallet: 1,
            }
        }).then(async user => {
            const wallet = await prisma.Wallets.create({
                data: {
                    address: "0xE169aa6a360447Ced2aa42DDc4bb2A33A7cBf29E",
                    user_id: user.id
                }
            }) 
          }
        )
    }catch(error){
        console.log(error);
    }
        

    

    try {
    //create company
        const company = await  prisma.companies.create({
            data: {
                name: "Dany MAN VENTURES",
                state_id: "1",
                wallet_id: "1"
            }
        });
    }catch(error){
        console.log(error);
    }
    

        const offer = await prisma.offers.create({
            data: {
                company_id : 1,
                wallet_id : 1,
                from : "1",
                to: "2",
                item_qty: 4,
                price: 1000
            }
        }); 


    

    // console.log( { offer, userReceiver, company, wallet, usercomp} );

    res.json({offer});


})