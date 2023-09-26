const MyProject = require('../models/MyProjects');

const getAllProjects = async (req, res) => {
    try {
      const project = await MyProject.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: [project],
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    };

  const getProjectByID = async (req, res) => {
    try {
      const project = await MyProject.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: project,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addProject = async (req, res) => {
    try {
      const project = await MyProject.create(req.body);
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: project,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to add data',
        error: error,
      });
    }
    };

  const deleteProjectByID =  async (req, res) => {
    try {
      const project = await MyProject.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: project,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

  const updateProjectByID = async (req, res) => {
    try {
      const project = await MyProject.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: project,
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
    getAllProjects,
    getProjectByID ,
    addProject,
    updateProjectByID,
    deleteProjectByID,
  };
