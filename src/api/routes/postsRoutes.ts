import express from "express";
import * as postsController from "../controllers/postsController";

const router = express.Router();

router.get("/", postsController.getPosts);
router.get("/id/:id", postsController.getPost);
router.get("/enabled/", postsController.getEnabledPosts);
router.get("/disabled/", postsController.getDisabledPosts);
router.post("/", postsController.createPost);
router.put("/id/:id", postsController.updatePost);
router.delete("/id/:id", postsController.deletePost);

export default router;
