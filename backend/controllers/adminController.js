const Admin = require('../models/admin')


const addAnnouncement = async(req,res) => {

    console.log('from backe eeend',req.body.announcement);


    try{
        const addAnnounce = await Admin.create({announcementArray: [
            { announcement: req.body.announcement }
          ]})

        res.status(200).json(addAnnounce)

    }catch(err){
      res.status(500).json(err)
    }
    console.log('finsh');
}



const getAnnouncement = async(req,res) => {

    console.log('from backe eeend');


    try{
        const getAnnounce = await Admin.aggregate([ {$unwind:'$announcementArray'} ])

        res.status(200).json(getAnnounce)

    }catch(err){
      res.status(500).json(err)
    }
    console.log('finsh');
}



module.exports={
    addAnnouncement,
    getAnnouncement

}