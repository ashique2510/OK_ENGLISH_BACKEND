const Admin = require('../models/admin')



// need recheck !!!!!!

const addAnnouncement = async(req,res) => {

    console.log('from backe eeend',req.body);

    try{
            await Admin.findOne({},{announcementArray:1},
          
          function(err,announce){

           if(err){
            return done(err);
          }
        if(announce){ 

          const updated = async() =>{
              
                 await Admin.updateOne({$push:{announcementArray:[{announcement:req.body.announcement,date:new Date}
                    ]}})

                  }
                  updated()
                  console.log('updated');
                  res.status(200).json('new announce updated')


        }else{

           const create = async() =>{

               await Admin.create({announcementArray:[{announcement:req.body.announcement, date:new Date }]})
            }
            create()
               res.status(200).json('new announce created')
          console.log('new announce created');
        }
      })



    }catch(err){
      // res.status(500).json(err)
    }
    console.log('finsh');
}




const getAnnouncement = async(req,res) => {

    console.log('from backe eeend');


    try{
        const getAnnounce = await Admin.aggregate([ {$unwind:'$announcementArray'},{$sort:{'announcementArray.date':-1}} ])
            
        res.status(200).json(getAnnounce)

    }catch(err){
      res.status(500).json(err)
    }
    console.log('finsh');
}

// Get all booking

const getAllBooking = async(req,res) => {

  console.log('from backe eeend');


  try{
      const getBooking = await Admin.findOne({},{bookingArray:1})
          
      res.status(200).json(getBooking)

  }catch(err){
    res.status(500).json(err)
  }
  console.log('finsh from booking');
}






module.exports={
    addAnnouncement,
    getAnnouncement,
    getAllBooking

}