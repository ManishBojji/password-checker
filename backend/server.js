const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/breach/:prefix", async (req, res) => {
  const { prefix } = req.params;
  try {
    const response = await axios.get(`https://api.pwnedpasswords.com/range/${prefix}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching breach data");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
