import express from "express"
import { getAllTerrorists, getAllTesters, newTester } from "../controllers/terrorist.controllers.js"

export const router = express.Router()

router.get('/terrorists', getAllTerrorists)

router.post('/tester', newTester)

router.get('/tester', getAllTesters)
