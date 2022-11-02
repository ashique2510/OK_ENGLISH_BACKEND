const express=require('express')
const router=express.Router()
const {registerUser,loginUser,getMe ,setavatar, getAllContactUser ,getAllUserForAdmin} = require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
router.post('/setavatar/:id', protect ,setavatar)
router.get('/allusers/:id', protect ,getAllContactUser)
router.get('/getAlluser',getAllUserForAdmin)

module.exports=router