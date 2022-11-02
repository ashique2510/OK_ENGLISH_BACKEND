const express = require('express')
const router = express.Router()
const { addAnnouncement ,getAnnouncement} = require('../controllers/adminController')


router.post('/createAnnouncement',addAnnouncement)
router.get('/getAllAnnouncement',getAnnouncement)


module.exports=router