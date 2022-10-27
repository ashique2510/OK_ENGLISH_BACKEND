const mongoose = require("mongoose");

const tutorSchema = mongoose.Schema(
  {
    
  baseAmount:{
    type:Number
  },
  
  
},{ timestamps: true }
);

module.exports = mongoose.model("Tutor", tutorSchema);
