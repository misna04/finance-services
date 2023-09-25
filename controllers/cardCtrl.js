const cardModel = require("../models/cards")

exports.get = function (req, res, next) {
	cardModel
		.find()
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			next(err)
		})
}

exports.getDetail = function (req, res, next) {
	const { _id } = req.params
	cardModel
		.findById(_id)
		.then((data) => {
			res.json(data)
		})
		.catch((err) => {
			next(err)
		})
}

exports.create = async function (req, res, next) {
	try {
		let new_data = new cardModel(req.body)
		let data = await new_data.save()

		await res.json(data)
	} catch (err) {
		next(err)
	}
}

exports.update = async function (req, res, next) {
	let { _id } = req.params

	try {
		let data = await cardModel.findByIdAndUpdate(_id, req.body, { new: true })
		await res.json(data)
	} catch (err) {
		next(err)
	}
}

exports.delete = async function (req, res, next) {
	let { _id } = req.params
	try {
		await cardModel.findByIdAndDelete({ _id })
		await res.json({ message: "successfully deleted" })
	} catch (err) {
		next(err)
	}
}
