const router = require("express").Router()
const ctrl = require("../controllers");

router.get("/", ctrl.get);
router.get("/:id", ctrl.getById);
router.get("/:id/styles", ctrl.getAllStyle);
router.get("/:id/related", ctrl.getRelatedStyle);

module.exports = router;
