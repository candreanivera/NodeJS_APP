/**U P L O A D   F I L E S */
const multer = require('multer');

/**Define how the files will be named. Files will be uploaded to the upload folder
 */
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname +  '-' + Date.now())
    }
});

const upload = multer({storage: storage});

module.exports = upload;
