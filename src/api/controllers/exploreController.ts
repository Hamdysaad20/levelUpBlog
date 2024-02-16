import { Request, Response } from "express";
import Item from "../../db/models/posts";

// Get a single post by id
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

// get all titles, images, keywords, and summaries of all posts where enabled is true
export const getEnabledPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Item.find({ enabled: true });
    res.status(200).json(
      posts.map((post) => ({
        title: post.title,
        image: post.image,
        keywords: post.keywords,
        summary: post.summary,
      }))
    );
  } catch (error) {
    res.status(500).send(error);
  }
};
