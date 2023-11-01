const express = require("express");
const controller = require('../controllers/upload');
//multer is used to upload files
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname +  '-' + Date.now())
    }
});

const upload = multer({ storage: storage});

/**U P L O A D  F I L E S */
router.post(`/upload`, upload.single("myFile"), (req, res) => {
    res.json({ message: 'File uploaded successfully!' });
});

module.exports = router;