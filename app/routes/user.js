const express = require("express");
const router = express.Router();
const controller = require('../controllers/user'); 

const path = 'user';

/**Different controllers for the user route*/
router.get(`/${path}`, controller.getData);

router.post(`/${path}`, controller.insertData);

router.put(`/${path}/:id`, controller.updateSingle);

router.delete(`/${path}/:id`, controller.deleteSingle);

module.exports = router;