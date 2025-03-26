import PostRepository from "../repositories /post.repository";
import { CreatePostDTO, UpdatePostDTO } from "../types/Post";
import Post from "../models/post.model";
import { defaultMaxListeners } from "events";

export class PostService {
  constructor(private postRepository: PostRepository) {}

  async createPost(data: CreatePostDTO): Promise<Post> {
    return this.postRepository.create(data);
  }

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.getAll();
  }

  async getPostById(id: Number): Promise<Post | null> {
    return this.postRepository.getById(id);
  }

  async updatePost(id: string, data: UpdatePostDTO): Promise<Post | null> {
    return this.postRepository.update(id, data);
  }

  async deletePost(id: string): Promise<boolean> {
    return this.postRepository.delete(id);
  }
}

export default PostService;