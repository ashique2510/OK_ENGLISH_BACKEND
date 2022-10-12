const mongoose = require("mongoose");

const tutorSchema = mongoose.Schema(
  {
    time: [
      { fifteenMinutes:String ,
       thirtyMinutes: String},
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tutor", tutorSchema);
