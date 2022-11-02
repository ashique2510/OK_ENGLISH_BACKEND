const mongoose = require('mongoose')

const adminSchema = mongoose.Schema(

    {
        announcementArray: [
                            {
                             type: new mongoose.Schema(
                                {
                                    announcement: String,
                                },
                                { timestamps: true }
                              )
                            }
                           ]
        
       
       
    }

    )

    module.exports=mongoose.model('admin',adminSchema)