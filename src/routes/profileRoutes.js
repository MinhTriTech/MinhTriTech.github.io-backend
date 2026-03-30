import express from "express";
import { getAbout, getInfo, getProject, getSkill } from "../controllers/profileController.js";


const router = express.Router();

router.get("/getInfo", getInfo);
router.get("/getProject", getProject);
router.get("/getSkill", getSkill);
router.get("/getAbout", getAbout);

export default router;