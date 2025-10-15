import express from "express"
import * as authController from "../controller/authController.js"

const api = express.Router()

api.get('/register', authController.register)
api.post('/login', authController.login)

export default api 