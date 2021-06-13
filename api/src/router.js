const { Router } = require('express');
const multer = require('multer');
const storage = multer.diskStorage({destination: 'api/uploads/', filename: filename});
router = Router();

function filename(request, file, callback) {
    callback(null, file.originalname);
};

function fileFilter(request, file, callback) {
    if (file.mimetype !== 'image/png') {
        request.fileValidationError = 'Wrong file type';
        callback(null, false, {'Wrong file type'});
    } else {
        callback(null, true);
    }
}

module.exports = router;