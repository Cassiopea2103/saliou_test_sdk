const express= require('express')
const router= express.Router()
const {getController}= require('../controllers/apiControllers')

router.route('/')
    .get(getController)

module.exports= router