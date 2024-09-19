const { Router } = require("express");
const { getAbrangencies } = require("../requests/abrangencies");

const abrangenciesRouter = Router();

abrangenciesRouter.get("/", getAbrangencies);

module.exports = getAbrangencies;
