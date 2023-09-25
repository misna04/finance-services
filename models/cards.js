const mongoose = require("mongoose")
const { Schema } = mongoose

const cardSchema = new Schema({
	cardNumber: String, //masked for security
	cardType: String, //visa, mastercard
	expireDate: Date,
	cvv: String, //card verification value, usually encrypted
	cardholderName: String,
	accountID: { type: Schema.Types.ObjectId, ref: "accounts" }
})

module.exports = mongoose.model("cards", cardSchema)
