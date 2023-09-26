const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const SkillSchema = new Schema({
    SkillType : { type: String, required: true },
    SkillDesc : { type: String, required: true },
  });

const Skills = model('Skills' ,SkillSchema);

module.exports = Skills;