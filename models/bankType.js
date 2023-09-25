const mongoose = require("mongoose")
const Schema = mongoose.Schema

const banktypeSchema = new Schema(
	{
		name: String,
		logo: String,
		note: String
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model("banktypes", banktypeSchema)
