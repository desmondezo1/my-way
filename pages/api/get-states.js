import db from '../../utils/db/index.js';

export default async function handler(req, res) {

    try {
        const statesRaw = await db.collection('states').get();
        if(statesRaw){
            let states = statesRaw.docs.map(entry => entry.data());
             let stat = states.map(item => item.states);
            res.status(200).json( stat[0] )   
        }else{
            const states = await db.collection('states').add({
                ...req.body,
                created: new Date().toISOString(),
              });
        }



    } catch (error) {

        res.status(400).end();
    }
   
  }
  