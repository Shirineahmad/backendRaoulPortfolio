const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const HeroSchema = new Schema({
    SmallDesc : { type: String, required: true },
    HeroImage : { type: String, required: true },
    ImageContentType : { type: String, required: true }, 
  
  });
  
  const Hero = model('Hero' , HeroSchema );

  module.exports = Hero;