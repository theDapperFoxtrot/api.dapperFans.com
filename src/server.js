const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// const get_token = async () => {
//   let response = await axios({
//     method: "post",
//     url: "https://id.twitch.tv/oauth2/token",
//     "Content-Type": "application/x-www-form-urlencoded",
//     data: {
//       client_id: process.env.client_id,
//       client_secret: process.env.client_secret,
//       code: "",
//       grant_type: "authorization_code",
//       redirect_uri: "http://localhost:3000/twitch",
//     },
//   });
// };

// get_token();

app.get("/twitch", (req, res) => {
  res.send("Welcome to the Twitch thing!");
  console.log(req);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
