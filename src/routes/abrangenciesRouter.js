const { Router } = require("express");
const { getAbrangencies } = require("../requests/legacy/abrangencies");

const abrangenciesRouter = Router();

abrangenciesRouter.get("/", getAbrangencies);

module.exports = getAbrangencies;
