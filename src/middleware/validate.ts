import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

// Schema untuk validasi post
const postSchema = z.object({
  title: z.string().min(5, 'Title harus minimal 5 karakter'),
  content: z.string().min(10, 'Content harus minimal 10 karakter')
});

export const validatePost = (req: Request, res: Response, next: NextFunction):void => {
  try {
    postSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      next({status:400,message:"Validation Error",errors:error.errors});
    }else{
     next(error) 
    }
  }
};
