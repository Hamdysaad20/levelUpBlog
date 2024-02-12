import express from "express";
import * as exploreController from "../controllers/exploreController";

const router = express.Router();

router.get("/", exploreController.getEnabledPosts);
router.get("/id/:id", exploreController.getPost);

export default router;
