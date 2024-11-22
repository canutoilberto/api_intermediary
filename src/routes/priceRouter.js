const { Router } = require("express");
const { getPrice } = require("../requests/price");

const priceRouter = Router();

priceRouter.post("/price", getPrice);

module.exports = getPrice;
