const { Router } = require("express");
const gridRouter = require("./gridRouter");

const router = Router();

router.use("/pricing/external/grid", gridRouter);

module.exports = router;
