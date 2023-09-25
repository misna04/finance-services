const express = require("express")
const router = express.Router()

const categoryCtrl = require("../controllers/promos/categoryCtrl")
const promoCtrl = require("../controllers/promos/promotionCtrl")

router.get("/", promoCtrl.get)
router.post("/", promoCtrl.create)
router.put("/:_id", promoCtrl.update)
router.delete("/:_id", promoCtrl.delete)

router.get("/category", categoryCtrl.get)
router.post("/category", categoryCtrl.create)
router.put("/category/:_id", categoryCtrl.update)
router.delete("/category/:_id", categoryCtrl.delete)

module.exports = router
