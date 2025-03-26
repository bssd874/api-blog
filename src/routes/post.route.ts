import express from 'express';
import  PostRepository  from '../repositories/post.repository';
import  PostService  from '../services/post.service';
import { PostController } from "../controllers/post.controller";
import upload from '../middleware/upload';
import { validatePost } from '../middleware/validate';

const router = express.Router();
const postController = new PostController(new PostService(new PostRepository()));

router.post('/', upload.single('thumbnail'),validatePost,postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id',postController.getPostById.bind(postController));

export default router;