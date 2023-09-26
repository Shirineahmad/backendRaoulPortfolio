const express = require('express');
const router = express.Router();

const {
    getAllSkills,
    getSkillByID,
    addSkill,
    updateSkillByID,
    deleteSkillByID,
} = require('../controllers/SkillsController');

router.get('/getAll', getAllSkills);
router.get('/getByID/:ID', getSkillByID);
router.post('/add', addSkill);
router.put('/update/:ID', updateSkillByID);
router.delete('/delete/:ID', deleteSkillByID);

module.exports = router;