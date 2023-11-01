/**U P L O A D   F I L E S */
const multer = require('multer');

<<<<<<< HEAD
/**Define how the files will be named
 * Files will be uploaded to the upload folder
=======
/** filename: how the file is going to be named after uploaded. Dates are used to avoid duplicity.
 * files will be stored inside 'uploads' folder
>>>>>>> 900b934844dc00e253cf8d82c1837d2aa1124a69
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
<<<<<<< HEAD

=======
>>>>>>> 900b934844dc00e253cf8d82c1837d2aa1124a69
