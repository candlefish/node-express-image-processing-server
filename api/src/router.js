const { Router } = require('express');
router = Router();

function filename(request, file, callback) {
    callback(null, file.originalname);
};

module.exports = router;