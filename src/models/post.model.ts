import { type Post as PrismaPost } from "@prisma/client";

class Post {
  private id: string;
  private title: string;
  private content: string;
  private thumbnail?: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: string,
    title: string,
    content: string,
    thumbnail: string | undefined,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.thumbnail = thumbnail;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromEntity(prismaPost: PrismaPost): Post {
    return new Post(
      prismaPost.id,
      prismaPost.title,
      prismaPost.content,
      prismaPost.thumbnail ?? undefined,
      prismaPost.createdAt,
      prismaPost.updatedAt
    );
  }

  toDTO() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      thumbnail: this.thumbnail,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export default Post;
