const { Router } = require("express");
const { getPrice } = require("../requests/price");

const priceRouter = Router();

priceRouter.post("/", getPrice);

module.exports = getPrice;
