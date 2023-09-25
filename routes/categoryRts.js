const express = require("express")
const router = express.Router()

const categoryCtrl = require("../controllers/categoryCtrl")

router.get("/", categoryCtrl.get)
router.post("/", categoryCtrl.create)
router.put("/:_id", categoryCtrl.update)
router.delete("/:_id", categoryCtrl.delete)

module.exports = router
