const express = require("express");
require("dotenv").config({ debug: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/twitch", async (req, res) => {
  res.send("Welcome to the Twitch thing!");
  let auth_code = req.query.code;

  let code = auth_code;

  const params = new URLSearchParams();
  params.append("client_id", process.env.Client_ID);
  params.append("client_secret", process.env.Client_Secret);
  params.append("code", `${code}`);
  params.append("grant_type", "authorization_code");
  params.append("redirect_uri", "http://localhost:3000/twitch");

  try {
    let response = await fetch(`https://id.twitch.tv/oauth2/token`, { method: "POST", body: params });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
