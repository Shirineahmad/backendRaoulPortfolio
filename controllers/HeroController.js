const Hero = require('../models/Hero');

const getAllHero = async (req, res) => {
    try {
      const hero = await Hero.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: hero,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to get data',
        error: error,
      });
    }
    }

  const getHeroByID = async (req, res) => {
    try {
      const hero = await Hero.findById(req.params.ID);

      if(!hero){
        return res.status(404).json({
          success: false,
          message: 'data not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: hero,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addHero = async (req, res) => {
    try {
      const  {SmallDesc} = req.body;
  
     
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Image file is required',
        });
      }
  
   
      const imageBuffer = req.file.buffer;
      const imageBase64 = imageBuffer.toString('base64');
      const imageContentType = req.file.mimetype;
  
      const hero = new Hero({
        SmallDesc,
        HeroImage: imageBase64, 
        ImageContentType: imageContentType,
      });
  
      await hero.save();
  
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: hero,
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

  const deleteHeroByID = async (req, res) => {
    try {
      const hero = await Hero.deleteOne({ _id: req.params.ID });
      res.status(200).json({
        success: true,
        message: 'Data deleted successfully',
        data: hero,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: 'unable to delete data',
        error: error,
      });
    }
    };

  const updateHeroByID = async (req, res) => {
    try {
      const hero = await Hero.findByIdAndUpdate(req.params.ID, req.body);
      res.status(200).json({
        success: true,
        message: 'data updated successfully.',
        data: hero,
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
    getAllHero,
    getHeroByID,
    addHero,
    updateHeroByID,
    deleteHeroByID,
  };
