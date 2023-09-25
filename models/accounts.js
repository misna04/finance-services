const mongoose = require("mongoose")
const { Schema } = mongoose

const accountSchema = new Schema(
	{
		name: String,
		accountNumber: Number,
		accountType: Object, //taplus, or something, bank, credit, savings, loan,
		balance: Number, //current balance
		currency: String,
		status: Boolean, //active, close, frozen
		desc: String,
		note: String,
		adminfee: Number,
		minAmount: Number,
		userID: { type: Schema.Types.ObjectId, ref: "profiles" }, //or objectID? -> check more
		linkedcust: { type: Schema.Types.ObjectId, ref: "profiles" }, //or objectID? -> userid
		history: Array //transaction history (push)
	},
	{
		timestamps: true
	}
)

// profile user/nasabah
// const customerSchema = new Schema({
// 	firstName: String,
// 	lastName: String,
// 	phoneNumber: String,
// 	address: String,
// 	email: String,
// 	identity: [
// 		{
// 			type: String, //ktp, passport
// 			idNumber: String //nomor identity
// 		}
// 	],
// 	accounts: accountSchema
// })

module.exports = mongoose.model("accounts", accountSchema)
