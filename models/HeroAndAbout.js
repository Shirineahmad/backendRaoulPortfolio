const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const HeroAndAboutSchema = new Schema({
    SmallDesc : { type: String, required: true },
    AboutMeDesc : { type: String, required: true },
    Type : { type: String, required: true },
  
  });
  
  const HeroAndAbout = model('HeroAndAbout' , HeroAndAboutSchema );

  module.exports = HeroAndAbout;