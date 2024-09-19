const { Router } = require("express");
const gridRouter = require("./gridRouter");
const programRouter = require("./programRouter");
const durationsRouter = require("./durationsRouter");
const abrangenciesRouter = require("./abrangenciesRouter");
const priceRouter = require("./priceRouter");

const router = Router();

router.use("/pricing/external/grid", gridRouter);
router.use("/pricing/external/base/programs", programRouter);
router.use("/pricing/external/base/durations", durationsRouter);
router.use("/pricing/external/abrangencies", abrangenciesRouter);
router.use("/pricing/external/price", priceRouter);

module.exports = router;
