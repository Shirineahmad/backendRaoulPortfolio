const mongoose = require('mongoose');
const { Schema, model } = mongoose;



const MyProjectsSchema = new Schema({
    ProjectName: { type: String, required: true },
    ProjectDesc : { type: String, required: true },
    TechUsed : { type: String, required: true },
    DemoLink : { type: String, required: true, unique: true},
    RepoLink: { type: String, required: true , unique: true },
    ProjectImage: { type: String , required: true },
    ImageContentType: { type: String, required: true },

  
  });
  
  
  const MyProject = model('MyProject' , MyProjectsSchema );

  module.exports = MyProject;
  