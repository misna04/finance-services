const mongoose = require("mongoose")
const Schema = mongoose.Schema

const menuSchema = new Schema({
	name: String,
	status: Boolean,
	main: Boolean, //view on home screen
	category: String, //header/type/category
	icon: String, // icon name -> using third party
	img: String, //icon images -> own icon using img
	navigate: String, //navigation to where
	link: String, // href to web
	note: String,
	appname: String //menu for what application
})

module.exports = mongoose.model("menus", menuSchema)
