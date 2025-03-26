export interface PostDTO {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePostDTO {
  title: string;
  content: string;
  thumbnail?: string;
}

export interface UpdatePostDTO {
  title?: string;
  content?: string;
  thumbnail?: string;
}
