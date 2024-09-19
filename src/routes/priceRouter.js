const { Router } = require("express");
const { getPrice } = require("../requests/price");

const priceRouter = Router();

priceRouter.get("/", getPrice);

module.exports = getPrice;
