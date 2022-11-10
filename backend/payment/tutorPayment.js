const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Admin = require('../models/admin')




const paymentOrder =( async (req, res) => {

	console.log('created order');
	console.log('creat order',req.body);
      
	// Create Order
	try {
		const instance = new Razorpay({
			key_id: process.env.RAZ_KEY_ID,
			key_secret: process.env.RAZ_KEY_SECRET,
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

// Payment Verify

const paymentVerify =( async (req, res) => {

	console.log('payment verify');

	// console.log('payment verify',req.body.planDetails);userDetails

	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body.response;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.RAZ_KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {

          const { name, email } =req.body.userDetails
          const { radioMonth, radioMinutes, radioDays, totalAmount, startDate } =req.body.planDetails

			try{
				await Admin.findOne({},{bookingArray:1},
			  
			  function(err,booking){
	  
			   if(err){
				return done(err);
			  }
			if(booking){ 
	  
			  const updated = async() =>{
				  
					 await Admin.updateOne({$push:{bookingArray:[{name, email, radioMonth, radioMinutes, radioDays, totalAmount, startDate ,date:new Date}
						]}})
	  
					  }
					  updated()
					  console.log('updated');
					  res.status(200).json('new booking updated')
	  
	  
			}else{
	  
			   const create = async() =>{
	  
				   await Admin.create({bookingArray:[{name, email, radioMonth, radioMinutes, radioDays, totalAmount, startDate ,date:new Date}]})
				}
				create()
				   res.status(200).json('Payment verified successfully and new booking created')
			  console.log('new booking created');
			}
		  })
	  
	  
	  
		}catch(err){
		  // res.status(500).json(err)
		}
		console.log('finsh');



			// return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});



module.exports = {
    paymentOrder,
    paymentVerify
}