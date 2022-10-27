const mongoose = require('mongoose')

const articleCategorySchema = mongoose.Schema(

    {
        name:{
            type:String,
            required:true
        },
       
    },{timestamps:true}

    )

    module.exports=mongoose.model('articleCategory',articleCategorySchema)