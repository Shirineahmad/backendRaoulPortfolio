const Skills = require('../models/Skills');

const getAllSkills = async (req, res) => {
    try {
      const skill = await Skills.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: skill,
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
      const skill = await Skills.findById(req.params.ID);

      if (!skill) {
        return res.status(404).json({
          success: false,
          message: 'Skill not found',
        });
      }

      res.status(200).json({
        success: true,
        message: 'Skill retrieved successfully',
        data: skill,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unable to get skill by ID',
        error: error,
      });
    }
};


const addSkill = async (req, res) => {
  try {
    const  { SmallDesc , SkillType , SkillDesc } = req.body;

   
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Image file is required',
      });
    }

 
    const imageBuffer = req.file.buffer;
    const imageBase64 = imageBuffer.toString('base64');
    const imageContentType = req.file.mimetype;

    const skill = new skills({
      SmallDesc,
      SkillType , 
      SkillDesc,
      skillsImage: imageBase64, 
      ImageContentType: imageContentType,
    });

    await skill.save();

    res.status(200).json({
      success: true,
      message: 'Data added successfully',
      data: skill,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Unable to add data',
      error: error.message,
    });
  }
};

  const deleteSkillByID = async (req, res) => {
    try {
      const skill = await Skills.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: skill,
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
      const skill = await Skills.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'skill updated successfully.',
        data: skill,
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
