import express from "express";
import * as exploreController from "../controllers/exploreController";

const router = express.Router();

router.get("/:id", exploreController.getPost);

export default router;
