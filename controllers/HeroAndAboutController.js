const HeroAndAbout = require('../models/HeroAndAbout');

const getAllHeroAndAbout = async (req, res) => {
    try {
      const heroAbout = await HeroAndAbout.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: [heroAbout],
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    }

  const getHeroAndAboutByID = async (req, res) => {
    try {
      const heroAbout = await HeroAndAbout.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: heroAbout,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addHeroAndAbout = async (req, res) => {
    try {
      const heroAbout = await HeroAndAbout.create(req.body);
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: heroAbout,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to add data',
        error: error,
      });
    }
    };

  const deleteHeroAndAboutByID = async (req, res) => {
    try {
      const heroAbout = await HeroAndAbout.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: heroAbout,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

  const updateHeroAndAboutByID = async (req, res) => {
    try {
      const heroAbout = await HeroAndAbout.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: heroAbout,
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
    getAllHeroAndAbout,
    getHeroAndAboutByID,
    addHeroAndAbout,
    updateHeroAndAboutByID,
    deleteHeroAndAboutByID,
  };
