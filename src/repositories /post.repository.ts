import prisma from "../utils/prisma";
import { CreatePostDTO, UpdatePostDTO } from "../types/Post";
import Post from "../models/post.model";

export class PostRepository {
  async create(data: CreatePostDTO): Promise<Post> {
    const prismaPost = await prisma.post.create({ data });
    return Post.fromEntity(prismaPost);
  }

  async getAll(): Promise<Post[]> {
    const prismaPosts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return prismaPosts.map(Post.fromEntity);
  }

  async getById(id: Number): Promise<Post | null> {
    const prismaPost = await prisma.post.findUnique({ where: { id : String(id)} });
    return prismaPost ? Post.fromEntity(prismaPost) : null;
  }

  async update(id: string, data: UpdatePostDTO): Promise<Post | null> {
    const prismaPost = await prisma.post.update({ where: { id }, data });
    return prismaPost ? Post.fromEntity(prismaPost) : null;
  }

  async delete(id: string): Promise<boolean> {
    await prisma.post.delete({ where: { id } });
    return true;
  }
}

export default PostRepository;
