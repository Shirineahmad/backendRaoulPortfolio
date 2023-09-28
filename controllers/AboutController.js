const About = require('../models/About');

const getAllAbout = async (req, res) => {
    try {
      const about = await About.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: about,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    };

  const getAboutByID = async (req, res) => {
    try {
      const about = await About.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: about,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addAbout = async (req, res) => {
    try {
      const about = await About.create(req.body);
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: about,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to add data',
        error: error,
      });
    }
    };

  const deleteAboutByID =  async (req, res) => {
    try {
      const about = await About.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: about,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

  const updateAboutByID = async (req, res) => {
    try {
      const about = await About.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: about,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'Unable to update data',
        error: error,
      });
    }
  };

  module.exports = {
    getAllAbout,
    getAboutByID ,
    addAbout,
    updateAboutByID,
    deleteAboutByID,
  };
