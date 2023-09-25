const express = require("express")
const router = express.Router()

const accountCtrl = require("../controllers/accountCtrl")

router.get("/", accountCtrl.get)
router.post("/", accountCtrl.create)
router.put("/:_id", accountCtrl.update)
router.delete("/:_id", accountCtrl.delete)

module.exports = router
