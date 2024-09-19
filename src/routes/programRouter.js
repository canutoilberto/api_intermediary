const { Router } = require("express");
const { getProgram } = require("../requests/programs");

const programRouter = Router();

programRouter.get("/", getProgram);

module.exports = programRouter;
