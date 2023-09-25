const express = require("express")
const router = express.Router()

const promoCtrl = require("../controllers/promoCtrl")

router.get("/", promoCtrl.get)
router.post("/", promoCtrl.create)
router.put("/:_id", promoCtrl.update)
router.delete("/:_id", promoCtrl.delete)

module.exports = router
