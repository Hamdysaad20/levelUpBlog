import express from "express";
import * as postsController from "../controllers/postsController";

const router = express.Router();

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getPost);
router.post("/", postsController.createPost);
router.put("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);

export default router;
