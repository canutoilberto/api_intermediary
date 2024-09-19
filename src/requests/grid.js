const axios = require("axios");

const { API_URL, API_KEY } = process.env;

const getGrid = async (req, res) => {
  try {
    const { canal, abrangencia, programa, dataInicial, dataFinal } = req.query;

    const grid = await axios.get(`${API_URL}/pricing/external/grid`, {
      params: {
        canal,
        abrangencia,
        programa,
        dataInicial,
        dataFinal,
      },
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    return res.status(200).json(grid.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getGrid };
