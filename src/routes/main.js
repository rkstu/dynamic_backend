const { Router } = require("express");
const express = require("express");

const Details = require("../models/Details.js");
const Slider = require("../models/Slider.js");
const Service = require("../models/Service.js");
const Contact = require("../models/Contact.js");

const routes = express.Router();

routes.get("/", async (req, res)=>{

  const details = await Details.findById({"_id": "62c6e1d4b1aa928f87fad2c2"});
  const slides = await Slider.find()
  const services = await Service.find();
  // console.log(services);

  // res.
  // console.log(details);


  res.render("index", {
    details: details,
    slides: slides,
    services: services
  });
})

routes.get("/gallery", async (req, res)=>{
  const details = await Details.findById({"_id": "62c6e1d4b1aa928f87fad2c2"});

  res.render("gallery", {
    details: details
  });
})

routes.post("/process-contact-form", async (req, res)=>{
  // console.log(req.body);

  //saving data to DB
  try{
    const data = await Contact.create(req.body);
    // console.log(data);
    res.redirect("/");
  }
  catch(err){
    console.log(err);
    res.redirect("/");
  }


  // res.send("Your form saved");
})

module.exports = routes;