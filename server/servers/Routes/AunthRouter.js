const express           = require("express")
const Router            = express.Router()
const authController    = require('../Controller/AuthController')    

Router.post('/register', authController.registerUser)
Router.post('/login', authController.loginUser)
Router.get('/user', authController.verifyToken, authController.getUser)


module.exports = Router