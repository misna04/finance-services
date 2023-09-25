const mongoose = require("mongoose")
const { Schema } = mongoose

const accountTypeSchema = new Schema({
	name: String,
	desc: String
})

module.exports = mongoose.model("accountType", accountTypeSchema)
