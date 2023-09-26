const ContactInfoAndDesc = require('../models/ContactInfoAndDesc');

const getAllContactInfoAndDesc = async (req, res) => {
    try {
      const contactInfo = await ContactInfoAndDesc.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: [contactInfo],
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    };

  const getContactInfoAndDescByID = async (req, res) => {
    try {
      const contactInfo = await ContactInfoAndDesc.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: contactInfo,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addContactInfoAndDesc = async (req, res) => {
    try {
      const contactInfo = await ContactInfoAndDesc.create(req.body);
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: contactInfo,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to add data',
        error: error,
      });
    }
    };

  const deleteContactInfoAndDescByID =  async (req, res) => {
    try {
      const contactInfo = await ContactInfoAndDesc.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: contactInfo,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

  const updateContactInfoAndDescByID = async (req, res) => {
    try {
      const contactInfo = await ContactInfoAndDesc.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: contactInfo,
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
    getAllContactInfoAndDesc,
    getContactInfoAndDescByID ,
    addContactInfoAndDesc,
    updateContactInfoAndDescByID,
    deleteContactInfoAndDescByID,
  };
