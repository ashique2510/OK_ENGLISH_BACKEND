const express = require('express')
const router = express.Router()
const { createCategory , getCategory } = require('../controllers/articleCategoryController')


router.post('/create',createCategory)
router.get('/getCategory',getCategory)


module.exports=router