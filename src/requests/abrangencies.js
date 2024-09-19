const axios = require("axios");

const { API_URL, API_KEY } = process.env;

const getAbrangencies = async (req, res) => {
  try {
    const abrangencies = await axios.get(
      `${API_URL}/pricing/external/abrangencies`,
      {
        headers: {
          "X-Api-Key": API_KEY,
        },
      }
    );
    return res.status(200).json(abrangencies.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAbrangencies };
