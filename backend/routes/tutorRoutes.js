const express = require('express')
const router = express.Router()
const {protect}=require('../middleware/authMiddleware')
const { setFifteenMinFees , setThirtyMinutes ,getPlanAmount ,setBaseAmount ,getBaseAmount} = require('../controllers/tutorController')

// router.post('/fifteenMinFees',setFifteenMinFees)
// router.post('/thirtyMinutes',setThirtyMinutes)

router.post('/setBaseAmount',setBaseAmount)
router.get('/baseAmount/', getBaseAmount)




module.exports=router