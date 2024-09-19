const axios = require("axios");

const { API_URL, API_KEY } = process.env;

const getProgram = async (req, res) => {
  try {
    const program = await axios.get(
      `${API_URL}/pricing/external/base/programs`,
      {
        headers: {
          "X-Api-Key": API_KEY,
        },
      }
    );

    return res.status(200).json(program.data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getProgram };
