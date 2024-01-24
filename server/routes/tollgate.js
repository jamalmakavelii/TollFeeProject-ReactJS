import express from 'express'
import { Tollgate } from '../models/Tollgate.js';
const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/add', verifyAdmin, async (req, res) => {
    try{
        const {expressway, entrypoint, exitpoint, classnumber, vehicle, price} = req.body;
        const newtollgate = new Tollgate ({
            expressway,
            entrypoint,
            exitpoint,
            classnumber,
            vehicle,
            price
        })
        await newtollgate.save()
        return res.json({added: true})
    }catch(err){
        return res.json({message: "Error in adding tollgate"})
    }
})
 
router.get('/tollgate' , async (req, res)=> {
    try{
      const tollgate = await Tollgate.find
      return res.json(tollgate)
    }catch(err) {
    return res.json(err)
    }
})

router.get('/tollgates', async (req, res) => {
     try {
         const tollgates = await Tollgate.find()
         return res.json(tollgates)
     }catch(err){
        return res.json(err)
     }
})

router.get('/tollgate/:id',  async (req, res) => {
try{
    const id = req.params.id;
    const tollgates = await Tollgate.findById({_id: id})
    return res.json(tollgates)
  }catch(err) {
  return res.json(err)
  }
})

router.put('/tollgate/:id',  async (req, res) => {
    try{
        const id = req.params.id;
        const tollgate = await Tollgate.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, tollgate})
      }catch(err) {
      return res.json(err)
      }
    })

router.delete('/tollgate/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const tollgate = await Tollgate.findByIdAndDelete({_id: id})
        return res.json({deleted: true, tollgate})
      }catch(err) {
      return res.json(err)
      }
})

export {router as tollgateRouter}