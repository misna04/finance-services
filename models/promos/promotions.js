const mongoose = require("mongoose")
const { Schema } = mongoose

const promotionSchema = new Schema(
	{
		name: String,
		desc: String,
		startDate: Date,
		endDate: Date,
		promoType: String, // percentage discount, fixed amount discount, buy one get one free, points-based
		amount: Number, // discount amout or usages
		minPurchase: Number,
		applicability: String, //specifict products, all products, specifict group
		usageLimit: Number, // limited to one-time use (1), certain number
		status: String, // active, epxired, inactive
		code: String,
		img: imgSchema,
		location: {
			type: pointSchema,
			required: true
		}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model("promotions", promotionSchema)

// location
const pointSchema = new Schema({
	type: {
		type: String,
		enum: ["Point"],
		required: true
	},
	coordinates: {
		type: [Number],
		required: true
	}
})

// image schema
const imgSchema = new Schema(
	{
		name: String,
		size: Number,
		width: Number,
		height: Number,
		altText: String,
		format: String, //small, medium, thumbnail
		caption: String,
		ext: String, //png, jpeg
		mime: String,
		hash: String,
		url: String,
		path: String,
		previewUrl: String
	},
	{
		timestamps: true
	}
)
