import { Request, Response } from "express";
import  PostService  from "../services/post.service";

export class PostController {
  constructor(private postService: PostService) {}

  createPost = async (req: Request, res: Response) => {
    try {
      const { title, content } = req.body;
      const thumbnail = req.file ? `/uploads/${req.file.filename}` : undefined;

      const post = await this.postService.createPost({
        title,
        content,
        thumbnail:req.body.thumbnail,
      });
      res.status(201).json(post.toDTO());
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };

  getAllPosts = async (_req: Request, res: Response) => {
    try {
      const posts = await this.postService.getAllPosts();
      res.json(posts.map((post) => post.toDTO()));
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };

  getPostById = async (req: Request, res: Response) => {
    try {
      const  id  =Number( req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: "ID is required" });

      const post = await this.postService.getPostById(id);
      if (!post) return res.status(404).json({ message: "Post not found" });

      res.json(post.toDTO());
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };


}

// export default PostController;
