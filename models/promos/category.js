const mongoose = require("mongoose")
const { Schema } = mongoose

const promoCategorySchema = new Schema({
	name: String, //discount, coupons, loyalty programs
	desc: String
})

module.exports = mongoose.model("pcategories", promoCategorySchema)
