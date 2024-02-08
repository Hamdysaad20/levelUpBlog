import express from "express";
import * as commentsController from "../controllers/commentsController";

const router = express.Router();

router.get("/", commentsController.getComments);
router.get("/:id", commentsController.getComment);
router.post("/", commentsController.createComment);
router.put("/:id", commentsController.updateComment);
router.delete("/:id", commentsController.deleteComment);

export default router;
