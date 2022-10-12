const express = require('express')
const router = express.Router()
const {protect}=require('../middleware/authMiddleware')
const { setFifteenMinFees , setThirtyMinutes ,getPlanAmount} = require('../controllers/tutorController')

router.post('/fifteenMinFees',setFifteenMinFees)
router.post('/thirtyMinutes',setThirtyMinutes)
router.get('/planAmount', getPlanAmount)




module.exports=router