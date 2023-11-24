const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": "87c1d46d-c649-48fd-afc6-acb2c9830f13" } }
    );
    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }

  // return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
