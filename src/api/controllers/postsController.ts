import { Request, Response } from "express";
import Item from "../../db/models/posts";

//Get all posts
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Item.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get a single post by id
export const getPost = async (req: Request, res: Response) => {
  try {
    const post = await Item.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all posts where enabled is true
export const getEnabledPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Item.find({ enabled: true });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// get all posts where enabled is false
export const getDisabledPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Item.find({ enabled: false });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Create a new post
export const createPost = async (req: Request, res: Response) => {
  try {
    const post = new Item(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Update a post by id
export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Delete a post by id
export const deletePost = async (req: Request, res: Response) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
