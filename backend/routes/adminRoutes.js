const express = require('express')
const router = express.Router()
const { addAnnouncement ,getAnnouncement ,getAllBooking} = require('../controllers/adminController')


router.post('/createAnnouncement',addAnnouncement)
router.get('/getAllAnnouncement',getAnnouncement)
router.get('/getAllbooking',getAllBooking)



module.exports=router