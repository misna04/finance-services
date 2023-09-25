const mongoose = require("mongoose")
const Schema = mongoose.Schema

// transaction category
// list bank
const categorySchema = new Schema(
	{
		name: String,
		desc: String,
		logo: String, //path/url image/logo
		note: String,
		ctype: String //bank/dompet digital
	},
	{ timestamps: true }
)

module.exports = mongoose.model("categories", categorySchema)
