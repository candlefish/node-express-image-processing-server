const { Router } = require('express');
const { call } = require('ramda');
router = Router();

function filename(request, file, callback) {
    callback(null, file.originalname);
};

module.exports = router;