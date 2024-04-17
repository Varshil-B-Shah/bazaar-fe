const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/pay", async (req, res) => {
  try {
    const paymentIntent = await Stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      payment_method_data: {
        type: "card",
        card: {
          token: req.body.token.id,
        },
      },
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });

    if (
      paymentIntent.status === "requires_action" ||
      paymentIntent.status === "requires_source_action"
    ) {
      return res.status(200).json({
        requires_action: true,
        client_secret: paymentIntent.client_secret,
      });
    } else if (paymentIntent.status === "succeeded") {
      return res
        .status(200)
        .json({ message: "Payment successful", paymentIntent });
    } else {
      console.error("Unexpected payment intent status:", paymentIntent.status);
      return res.status(500).json({
        error: "Payment failed",
        message: "Unexpected payment intent status",
      });
    }
  } catch (error) {
    console.error("Error processing payment:", error.message);
    res.status(500).json({ error: "Payment failed", message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
