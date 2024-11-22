const axios = require("axios");

const { API_URL, API_KEY } = process.env;

export const getPrice = async (req, res) => {
  try {
    const data = req.body;

    const price = await axios.post(
      `${API_URL}/pricing/external/price-list-sf`,
      {
        data: data,

        headers: {
          "x-api-key": API_KEY,
        },
      }
    );
    return res.status(200).json(price.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
