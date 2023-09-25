const express = require("express")
const router = express.Router()

const menuCtrl = require("../controllers/menuCtrl")

router.get("/", menuCtrl.get)
router.post("/", menuCtrl.create)
router.put("/:_id", menuCtrl.update)
router.delete("/:_id", menuCtrl.delete)

module.exports = router
