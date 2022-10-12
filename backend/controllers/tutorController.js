const asyncHandler = require('express-async-handler')
const Tutor = require('../models/tutorModel')



// @descripton : Set fifteenMinFees
// @route : POST /api/tutor/fifteenMinFees
// @access : Private
const setFifteenMinFees = asyncHandler(async(req,res)=>{
    const { fifteenMinutes } = req.body
    if(!req.body.fifteenMinutes){
        res.status(400)
        throw new Error('Please add info')
    }
    const fees = await Tutor.create({
        fifteenMinutes:fifteenMinutes
    })
    res.status(200).json(fees)
})



// @descripton : Set fifteenMinFees
// @route : POST /api/tutor/thirtyMinutes
// @access : Private
const setThirtyMinutes = asyncHandler(async(req,res)=>{
    console.log('fffffffffffff',req.body.thirtyMinutes);
    const { amount } = req.body
    
    if(!req.body.thirtyMinutes){
        res.status(400)
        throw new Error('Please add info')
    }
    // const fees = await Tutor.create({
    //     thirtyMinutes:thirtyMinutes
    // })
    const fees = await Tutor.updateOne({},{$push:{time:{amount}}})
    console.log('from back end',fees);
    res.status(200).json(fees)
})


// @descripton : Get PlanAmount
// @route : GET /api/goals
// @access : Public
const getPlanAmount=asyncHandler(async(req,res)=>{
    const duration = req.body.data
    console.log('get duration',duration);
    if(duration == 'thirtyMinutes'){

    const amount = await Tutor.find( {}, {thirtyMinutes:1, _id:0} )
    res.status(200).json(amount)
    console.log('from if',amount);
    }else{

        const amount = await Tutor.find( {}, {fifteenMinutes:1, _id:0 } )
        res.status(200).json(amount)
        console.log('from else',amount);

    }

})



module.exports = {
    setFifteenMinFees,
    setThirtyMinutes,
    getPlanAmount
}
