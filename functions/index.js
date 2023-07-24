const functions = require("firebase-functions");
// const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NU1LTSCyHoY8vHXzXW7EVI3abfJhjxjT0ZZQxqQLvhi8WxD0FtLcxbEfo8pdjYoMG6TUyAyYDHB0EpBdiutcPBG00seiAVJpb"
);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  return response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received Boom!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    Clientsecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/e-clone-56572/us-central1/api
