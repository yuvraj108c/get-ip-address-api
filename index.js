const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    const ip = response.data.ip;
    res.send({ ip: ip });
  } catch (error) {
    res.status(500).send({ error: "Error retrieving IP address" });
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
