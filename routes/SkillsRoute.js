const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const {
    getAllSkills,
    getSkillByID,
    addSkill,
    updateSkillByID,
    deleteSkillByID,
} = require('../controllers/SkillsController');

router.get('/getAll', getAllSkills);
router.get('/getByID/:ID', getSkillByID);
router.post('/add',upload.single('image'), addSkill);
router.put('/update/:ID', updateSkillByID);
router.delete('/delete/:ID', deleteSkillByID);

module.exports = router;