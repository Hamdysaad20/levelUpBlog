import { Request, Response } from "express";
import Item from "../../db/models/comments";

//Get all comments
export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await Item.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get a single comment by id
export const getComment = async (req: Request, res: Response) => {
  try {
    const comment = await Item.findById(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get comments by post id
export const getCommentsByPostId = async (req: Request, res: Response) => {
  try {
    const comments = await Item.find({ post: req.params.id });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Create a new comment
export const createComment = async (req: Request, res: Response) => {
  try {
    const comment = new Item(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Update a comment by id
export const updateComment = async (req: Request, res: Response) => {
  try {
    const comment = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Delete a comment by id
export const deleteComment = async (req: Request, res: Response) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
