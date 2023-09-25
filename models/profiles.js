const mongoose = require("mongoose")
const Schema = mongoose.Schema

const profileSchema = new Schema({
	username: String,
	password: String, // hash & salted

	fullName: String,
	lastName: String,
	dateofbirth: Date,
	placeofbirth: String,
	email: String,
	img: String,
	phoneNumber: String
})

module.exports = mongoose.model("profiles", profileSchema)
