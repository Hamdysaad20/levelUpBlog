import express from "express";
import * as usersController from "../controllers/postsController";

const router = express.Router();

router.get("/", usersController.getPosts);
router.get("/:id", usersController.getPost);
router.post("/", usersController.createPost);
router.put("/:id", usersController.updatePost);
router.delete("/:id", usersController.deletePost);

export default router;
