import { Request } from "express";
import { CreatePostDTO, UpdatePostDTO } from "./Post";

export interface CreatePostRequest extends Request {
  body: CreatePostDTO;
}

export interface UpdatePostRequest extends Request {
  body: UpdatePostDTO;
}
