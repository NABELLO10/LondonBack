import express from "express";


import {  contacto, promocion

 } from "../Controllers/contactoController.js";


const router = express.Router()

router.post('/contactoLondon', contacto)
router.post('/promocion', promocion)



export default router