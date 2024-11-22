const { Router } = require("express");
const { getProgram } = require("../requests/legacy/programs");

const programRouter = Router();

programRouter.get("/", getProgram);

module.exports = programRouter;
