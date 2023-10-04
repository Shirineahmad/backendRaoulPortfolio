const Testimonial = require('../models/Testimonials');

const getAllTestimonials = async (req, res) => {
    try {
      const testimonial = await Testimonial.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: testimonial,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    };

  const getTestimonialByID = async (req, res) => {
    try {
      const testimonial = await Testimonial.findById(req.params.ID);

      if(!testimonial){
        return res.status(404).json({
          success: false,
          message: 'Skill not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: testimonial,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addTestimonial = async (req, res) => {
    try {
      const  { Name , Email , Review } = req.body;
  
     
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Image file is required',
        });
      }
  
   
      const imageBuffer = req.file.buffer;
      const imageBase64 = imageBuffer.toString('base64');
      const imageContentType = req.file.mimetype;
  
      const testimonial = new Testimonial({
        Name,
        Email,
        Review,
        UserImage: imageBase64,
        ImageContentType: imageContentType,
        approve: false, 
      });
  
      await testimonial.save();
  
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: testimonial,
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

  const deleteTestimonialByID =  async (req, res) => {
    try {
      const testimonial = await Testimonial.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: testimonial,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

  const updateTestimonialByID = async (req, res) => {
    try {
      const testimonial = await Testimonial.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: testimonial,
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
    getAllTestimonials,
    getTestimonialByID,
    addTestimonial,
    updateTestimonialByID,
    deleteTestimonialByID,
  };
