const { Router } = require('express');
const multer = require('multer');
const storage = multer.diskStorage({destination: 'api/uploads/', filename: filename});
const upload = multer({fileFilter, storage: storage});

router = Router();

function filename(request, file, callback) {
    callback(null, file.originalname);
};

function fileFilter(request, file, callback) {
    if (file.mimetype !== 'image/png') {
        request.fileValidationError = 'Wrong file type';
        callback(null, false, Error('Wrong file type'));
    } else {
        callback(null, true);
    }
}

module.exports = router;