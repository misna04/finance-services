const mongoose = require("mongoose")
const { Schema } = mongoose

const transactionSchema = new Schema(
	{
		dateTime: Date,
		desc: String,
		amount: Number,
		transactionType: String, //deposite, wuthdrawal, transfer
		accountID: { type: Schema.Types.ObjectId, ref: "accounts" }, //or objectID -> from account
		userID: String, // or obejctID -> from frofiles
		payee: Object, //purchase or bill payments
		category: String, //groceries, entertaiment?
		status: Boolean, //cancel, success
		receipt: String //file attach or confirmation
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model("transactions", transactionSchema)
