const { Router } = require("express");
const { getGrid } = require("../requests/legacy/grid");

const gridRouter = Router();

gridRouter.get("/", getGrid);

module.exports = gridRouter;
