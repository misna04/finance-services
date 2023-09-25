const mongoose = require("mongoose")
const Schema = mongoose.Schema

const walletDigitalSchema = new Schema(
	{
		name: String,
		logo: String,
		note: String
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model("walletdigitals", walletDigitalSchema)
