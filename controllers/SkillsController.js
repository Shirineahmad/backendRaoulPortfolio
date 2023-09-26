const Skills = require('../models/Skills');

const getAllSkills = async (req, res) => {
    try {
      const skills = await Skills.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: [skills],
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
  };

  const getSkillByID = async (req, res) => {
    try {
      const skills = await Skills.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'skill retrieved successfully',
        data: blog,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: 'unable to get skill by ID',
        error: error,
      });
    }
  };


  const addSkill = async (req, res) => {
    try {
      const skills = await Skills.create(req.body);
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: skills,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to add data',
        error: error,
      });
    }
  };

  const deleteSkillByID = async (req, res) => {
    try {
      const skills = await Skills.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: skills,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
  };

  const updateSkillByID = async (req, res) => {
    try {
      const skills = await Skills.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'skill updated successfully.',
        data: skills,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to update skill',
        error: error,
      });
    }
  };

  module.exports = {
    getAllSkills,
    getSkillByID,
    addSkill,
    updateSkillByID,
    deleteSkillByID,
  };
