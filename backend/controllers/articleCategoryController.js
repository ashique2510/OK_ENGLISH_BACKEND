const ArticleCategory = require('../models/articleCategory')


// Create Category

const createCategory = async (req,res)=>{
    const newCat = new ArticleCategory(req.body);

    try{
        const savedCat = await newCat.save()
        res.status(200).json(savedCat)

    }catch(err){
        res.status(500).json(err)

    }
}


// Get Category

const getCategory = async (req,res)=>{

    try{
        const categories = await ArticleCategory.find()
        res.status(200).json(categories)

    }catch(err){
        res.status(500).json(err)

    }
}



module.exports={
    createCategory,
    getCategory

}