const mongoose = require("mongoose")
const Schema = mongoose.Schema

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

const promoSchema = new Schema(
	{
		name: String, //promo name
		desc: String, //promo description
		location: {
			type: pointSchema,
			required: true
		},
		locationName: String, //nama lokasi ex: Makassar
		img: imgSchema,
		count: Number, //available promos?
		used: Number, //used promos number?
		publishedAt: Date
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model("promos", promoSchema)
