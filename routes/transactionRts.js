const express = require("express")
const router = express.Router()

const transactionCtrl = require("../controllers/transactionCtrl")

router.get("/", transactionCtrl.get)
router.post("/", transactionCtrl.create)
router.put("/:_id", transactionCtrl.update)
router.delete("/:_id", transactionCtrl.delete)

module.exports = router
