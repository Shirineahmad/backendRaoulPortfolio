const ContactMe = require('../models/ContactMe');

const getAllContact = async (req, res) => {
    try {
      const contact = await ContactMe.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: [contact],
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    };

  const getContactByID = async (req, res) => {
    try {
      const contact = await ContactMe.findById(req.params.ID);
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: contact,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addContact = async (req, res) => {
    try {
      const contact = await ContactMe.create(req.body);
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: contact,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to add data',
        error: error,
      });
    }
    };

  const deleteContactByID =  async (req, res) => {
    try {
      const contact = await ContactMe.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: contact,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

  const updateContactByID = async (req, res) => {
    try {
      const contact = await ContactMe.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: contact,
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
    getAllContact,
    getContactByID ,
    addContact,
    updateContactByID,
    deleteContactByID,
  };
