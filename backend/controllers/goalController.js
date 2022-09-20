const asyncHandler=require('express-async-handler')


// @descripton : Get goals
// @route : GET /api/goals
// @access : Private
const getGoals=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Get goalss'})
})

// @descripton : Set goals
// @route : POST /api/goals
// @access : Private
const setGoal=asyncHandler(async(req,res)=>{
    if(!req.body.text){

        res.status(400)
        throw new Error('Please add info')
    }
    res.status(200).json({message:'Get goalss'})
})

// @descripton : Update goals
// @route : PUT /api/goals/:id
// @access : Private
const updateGoal=asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Update goalss ${req.params.id}`})
})

// @descripton : Detete goals
// @route : DELETE /api/goals/:id
// @access : Private
const deleteGoal=asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Delete goalss ${req.params.id}`})
})


module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}