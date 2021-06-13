const { Router } = require('express');
const multer = require('multer');
const storage = multer.diskStorage({destination: 'api/uploads/', filename: filename});
router = Router();

function filename(request, file, callback) {
    callback(null, file.originalname);
};

module.exports = router;