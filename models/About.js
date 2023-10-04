const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const AboutSchema = new Schema({
    AboutTitle: { type: String, required: true },
    AboutDesc : { type: String, required: true , unique: true},

  });

  const About = model('About' , AboutSchema );

  module.exports = About;