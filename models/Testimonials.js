const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const TestimonialsSchema = new Schema({
    Name: { type: String, required: true },
    Email : { type: String, required: true, unique: true },
    Review : { type: String, required: true },
  
  });
  
  const Testimonial = model('Testimonial' , TestimonialsSchema );

  module.exports = Testimonial ;