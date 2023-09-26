const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const ContactInfoAndDescSchema = new Schema({
    SmallDesc: { type: String, required: true },
    PhoneNb : { type: Number, required: true, unique: true },
    Email : { type: String, required: true , unique: true },
    InLink : { type: String, required: true , unique: true},
    FbLink: { type: String, required: true , unique: true},
    InstagramLink: { type: String, required: true , unique: true},
  
  });
  

  const ContactInfoAndDesc = model('ContactInfoAndDesc' , ContactInfoAndDescSchema );
  

module.exports = ContactInfoAndDesc ;