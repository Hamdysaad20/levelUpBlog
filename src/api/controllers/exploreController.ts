import { Request, Response } from "express";
import Item from "../../db/models/posts";

export const getPost = async (req: Request, res: Response) => {
  try {
    const post = await Item.findById(req.params.id);
    res.status(200).json({
      title: post?.title,
      image: post?.image,
      keywords: post?.keywords,
      summary: post?.summary,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
