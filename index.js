const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const swaggerUi = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
const { default: mongoose } = require("mongoose")

// const swaggerSpec = swaggerJSDoc(options)

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect to mongodb
let dbURI = "mongodb://127.0.0.1/dbfinance"

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("Error connected to DB", err))

// routes
const menuRts = require("./routes/menuRts")
const promoRts = require("./routes/promoRts")
const accountRts = require("./routes/accountRts")
const promotionRts = require("./routes/promotionRts")

app.get("/", (req, res) => {
	res.send("Server running OK!")
})

app.use("/menu", menuRts)
app.use("/promo", promoRts)
app.use("/account", accountRts)
app.use("/promotion", promotionRts)

// listening to server
const port = process.env.PORT || 100
app.listen(port, () => console.log(`Server running on PORT ${[port]}`))
