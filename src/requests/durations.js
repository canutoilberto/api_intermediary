const axios = require("axios");

const { API_URL, API_KEY } = process.env;

const getDurations = async (req, res) => {
  try {
    const { dtMes } = req.query;

    const durations = await axios.get(
      `${API_URL}/pricing/external/base/durations`,
      {
        params: {
          dtMes,
        },
        headers: {
          "X-Api-Key": API_KEY,
        },
      }
    );
    return res.status(200).json(durations.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getDurations };
