const express = require('express');
const router = express.Router();

const { GetSubmitForm, GetFormData } = require('../controller/FormController');


router.post('/submit', GetSubmitForm);

router.get('/data', GetFormData);