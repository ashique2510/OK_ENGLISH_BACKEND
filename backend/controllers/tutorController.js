const asyncHandler = require('express-async-handler')
const Tutor = require('../models/tutorModel')



// @descripton : Set fifteenMinFees
// @route : POST /api/tutor/fifteenMinFees
// @access : Private
const setBaseAmount = asyncHandler(async(req,res)=>{
    const { baseAmount } = req.body
    console.log('from bbbbbbbbbbbback',req.body);
    if(!baseAmount){
        res.status(400)
        throw new Error('Please add info')
    }
    const fees = await Tutor.create({
        baseAmount
    })
    console.log('from back end',fees);
    res.status(200).json(fees)
})

const getBaseAmount = asyncHandler(async (req,res) =>{

    console.log('from baxk');

    const fetchBaseAmount = await Tutor.findOne({}, {baseAmount : 1})
    console.log('fetch amoutn', fetchBaseAmount);
    res.status(200).json(fetchBaseAmount)


})




// @descripton : Set fifteenMinFees
// @route : POST /api/tutor/fifteenMinFees
// @access : Private
const setFifteenMinFees = asyncHandler(async(req,res)=>{
    const { fifteenMinutes } = req.body
    console.log('from bbbbbbbbbbbback',req.body);
    if(!fifteenMinutes){
        res.status(400)
        throw new Error('Please add info')
    }
    const fees = await Tutor.create({
        fifteenMinutes:fifteenMinutes
    })
    console.log('from back end',fees);
    res.status(200).json(fees)
})



// @descripton : Set fifteenMinFees
// @route : POST /api/tutor/thirtyMinutes
// @access : Private
const setThirtyMinutes = asyncHandler(async(req,res)=>{
    const { thirtyMinutes } = req.body
    
    if(!req.body.thirtyMinutes){
        res.status(400)
        throw new Error('Please add info')
    }
    const fees = await Tutor.create({
        thirtyMinutes:thirtyMinutes
    })
    // const fees = await Tutor.updateOne({},{$push:{time:{amount}}})
    // console.log('from back end',fees);
    res.status(200).json(fees)
})


// @descripton : Get PlanAmount
// @route : GET /api/goals
// @access : Public
const getPlanAmount=asyncHandler(async(req,res)=>{
    console.log('from back end',req.params);
    const duration = req.params.time
    if(duration == 'thirtyMinutes'){

    const amount = await Tutor.findOne( {})
    res.status(200).json(amount)
    console.log('from if',amount);
    }
    
    if(duration == 'fifteenMinutes'){

        const Amount = await Tutor.findOne( {}, {fifteenMinutes:1} )
        res.status(200).json(Amount)
        console.log('from else',Amount);

    }

})



module.exports = {
    setFifteenMinFees,
    setThirtyMinutes,
    getPlanAmount,
    setBaseAmount,
    getBaseAmount
}
