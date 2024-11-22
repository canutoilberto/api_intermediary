const { Router } = require("express");
const { getDurations } = require("../requests/legacy/durations");

const durationRouter = Router();

durationRouter.get("/", getDurations);

module.exports = durationRouter;
