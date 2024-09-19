const axios = require("axios");

const { API_URL, API_KEY } = process.env;

const getPrice = async (req, res) => {
  try {
    const { compra, exibicao, programa, abrangencia, secundagem } = req.query;

    const price = await axios.get(`${API_URL}/pricing/external/price`, {
      params: {
        compra,
        exibicao,
        programa,
        abrangencia,
        secundagem,
      },
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    return res.status(200).json(price.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getPrice };
