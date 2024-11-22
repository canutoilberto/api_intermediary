const axios = require("axios");

const { API_URL, API_KEY } = process.env;

const getPrice = async (req, res) => {
  const data = req.body; // Parse JSON from the request body

  try {
    console.log("Request body:", data); // Log the incoming request body

    // Send the request to the external API
    const price = await axios.post(
      `${API_URL}/pricing/external/price-list-sf`,
      data, // Directly pass `data` here
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );

    // Respond with the data from the external API
    return res.status(200).json(price.data);
  } catch (error) {
    console.error("Error during request:", error.message); // Log error details
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getPrice };
