const express = require('express');
const router = express.Router();

const {
    getAllContactInfoAndDesc,
    getContactInfoAndDescByID ,
    addContactInfoAndDesc,
    updateContactInfoAndDescByID,
    deleteContactInfoAndDescByID,
} = require('../controllers/ContactInfoAndDescController');

router.get('/getAll',  getAllContactInfoAndDesc);
router.get('/getByID/:ID', getContactInfoAndDescByID);
router.post('/add',  addContactInfoAndDesc);
router.put('/update/:ID', updateContactInfoAndDescByID);
router.delete('/delete/:ID', deleteContactInfoAndDescByID);

module.exports = router;