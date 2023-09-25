require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const app = express();
const port = 5000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(express.urlencoded);

async function main() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("mongo connected");
  } catch (err) {
    console.log(err);
  }
}

// main();
const contactInfoAndDescSchema = new Schema({
  contactDesc: { type: String, required: true },
  phoneNb: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  linekdinLink: { type: String, required: true, unique: true },
  fbLink: { type: String, required: true, unique: true },
  instagramLink: { type: String, required: true, unique: true },
});
const contactInfoAndDesc = model(
  "ContactInfoAndDesc",
  contactInfoAndDescSchema
);
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/api/get", async (req, res) => {
  try {
    const contactAndDesc = await contactInfoAndDesc.find({});
    res.status(200).json({
      success: true,
      message: "data has find",
      data: [contactAndDesc],
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "unable to get data",
      error: error,
    });
  }
});
app.post("/api/post/contactInfoDesc", async (req, res) => {
  try {
    const contactAndDesc = await contactInfoAndDesc.create(req.body);
    res.status(200).json({
      success: true,
      message: "data has added",
      data: [contactAndDesc],
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "unable to post data",
      error: error,
    });
  }
});
app.delete("/api/delete/contactInfoDesc/:id", async (req, res) => {
  try {
    const contactAndDesc = await contactInfoAndDesc.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json({
      success: true,
      message: "data has delete",
      data: [contactAndDesc],
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "unable to delete data",
      error: error,
    });
  }
});
app.listen(port, () => {
  console.log(`Example app listening onport ${port}`);
});
