const express = require('express');
const router = express.Router();

const {
    getAllContact,
    getContactByID ,
    addContact,
    updateContactByID,
    deleteContactByID,
} = require('../controllers/ContactMeController');

router.get('/getAll', getAllContact);
router.get('/getByID/:ID', getContactByID);
router.post('/add', addContact);
router.put('/update/:ID', updateContactByID);
router.delete('/delete/:ID', deleteContactByID);

module.exports = router;