const express=require('express')
const router=express.Router()
const {registerUser,loginUser,getMe ,setavatar, getAllContactUser} = require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
router.post('/setavatar/:id', setavatar)
router.get('/allusers/:id',getAllContactUser)

module.exports=router