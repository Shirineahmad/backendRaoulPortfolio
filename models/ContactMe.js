const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ContactMeSchema = new Schema({
    UserName : { type: String, required: true },
    Email : { type: String, required: true , unique: true},
    Message : { type: String, required: true },
  
  });

  const ContactMe = model('ContactMe' , ContactMeSchema );

  module.exports = ContactMe;