const secret = process.env.SECRET;
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Entry = require("../models/Entry");

router.post("/postEntry", async (req, res) => {
  try {
    const date = new Date();
    console.log(req);
    const payload = req.body;
    console.log(payload);

    if (payload.secret != secret) {
      res.status(401).send("Trespassing not allowed!");
      console.log("jksd");
    } else {
      const entry = await Entry.create({
        entry: payload.entry,
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      });
      res.status(200).send("Post created");
    }
  } catch (error) {
    console.log("ERROR: \n", error);
    res.status(400).send("Invalid data!!!");
  }
});

router.get("/getEntry", async (req, res) => {
  try {
    const date = new Date();
    const entry = await Entry.find({
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    }).select("-_id");
    console.log(entry);
    res.status(200).json(entry);
  } catch (error) {
    console.log("ERROR: not able to get entry...");
    response.status(500).send("Server Error!");
  }
});

module.exports = router;
