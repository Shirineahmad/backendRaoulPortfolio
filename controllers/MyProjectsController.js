const MyProject = require('../models/MyProjects');

const getAllProjects = async (req, res) => {
    try {
      const project = await MyProject.find({});
      res.status(200).json({
        success: true,
        message: 'Data retrieved successfully',
        data: project,
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

      if (!project){
        return res.status(404).json({
          success: false,
          message: 'data not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'data retrieved successfully',
        data: project,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'unable to get data by ID',
        error: error,
      });
    }
  };


  const addProject = async (req, res) => {
    try {
      const  {ProjectName , ProjectDesc , TechUsed , DemoLink ,  RepoLink} = req.body;
  
     
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'Image file is required',
        });
      }
  
   
      const imageBuffer = req.file.buffer;
      const imageBase64 = imageBuffer.toString('base64');
      const imageContentType = req.file.mimetype;
  
      const project = new MyProject({
        ProjectName , 
        ProjectDesc , 
        TechUsed ,
        DemoLink , 
        RepoLink , 
        ProjectImage: imageBase64, 
        ImageContentType: imageContentType,
      });
  
      await project.save();
  
      res.status(200).json({
        success: true,
        message: 'Data added successfully',
        data: project,
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
