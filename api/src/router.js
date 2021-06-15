const { Router } = require('express');
const router = Router();

const multer = require('multer');
const storage = multer.diskStorage({destination: 'api/uploads/', filename: filename});
const upload = multer({fileFilter, storage: storage});

const path = require('path');
const photoPath = path.resolve(__dirname, '../../client/photo-viewer.html');

const imageProcessor = require('./imageProcessor');

router.get('/photo-viewer', (request, response) => {
    response.sendFile(photoPath);
});


router.post('/upload', upload.single('photo'), async (request, response) => {
    if (request.fileValidationError) return response.status(400).json({error: request.fileValidationError});

    try {
        await imageProcessor(request.file.filename);
    } catch (error) {
        
    }

    return response.status(201).json({success: true});
});

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