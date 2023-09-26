const LogIn = require('../models/LogIn');

const getAllLogIn = async (req, res) => {
    try {
      const Login = await LogIn.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: [Login],
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    };

  const getLogInByID = async (req, res) => {
    try {
      const Login = await LogIn.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: Login,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addLogIn = async (req, res) => {
    try {
      const Login = await LogIn.create(req.body);
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: Login,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to add data',
        error: error,
      });
    }
    };

  const deleteLogInByID =  async (req, res) => {
    try {
      const Login = await LogIn.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: Login,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

  const updateLogInByID = async (req, res) => {
    try {
      const Login = await LogIn.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: Login,
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
    getAllLogIn,
    getLogInByID ,
    addLogIn,
    updateLogInByID,
    deleteLogInByID,
  };
