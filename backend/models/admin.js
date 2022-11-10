const mongoose = require('mongoose')

const adminSchema = mongoose.Schema(

    {
        announcementArray: [
                            
                                {
                                    announcement: String,
                                    date:Date,
                                }
                          
                           ],
        bookingArray: [
                            
                            {
                                name: String,
                                email: String,
                                radioMonth: String,
                                radioMinutes: String,
                                radioDays: String,
                                totalAmount: String,
                                startDate: Date,
                                date:Date,
                            }
                      
                       ],
        
       
    }

    )

    module.exports=mongoose.model('admin',adminSchema)