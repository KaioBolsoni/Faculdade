import { Request, Response } from "express";
import * as PostBusiness from "../business/postbusiness";
import { findUserById } from "../business/userbusiness";

export const createPost = (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;

  if (!title || title.length < 3) {
    return res.status(400).send("Título inválido.");
  }
  if (!content || content.length < 10) {
    return res.status(400).send("Conteúdo inválido.");
  }
  if (!authorId) {
    return res.status(400).send("Autor não informado.");
  }
  if (!findUserById(authorId as string)) {
    return res.status(400).send("Autor não encontrado.");
  }

  const newPost = PostBusiness.createPostLogic(title, content, authorId as string);
  res.status(201).send(newPost);
};

export const updatePost = (req: Request, res: Response) => {
    const post = PostBusiness.findPostById(req.params.id);
    if (!post) {
      return res.status(404).send("Post não encontrado.");
    }

    const { title, content, published } = req.body;
    const updatedPost = PostBusiness.updatePostLogic(req.params.id, { title, content, published });
    res.status(200).send(updatedPost);
};

export const deletePost = (req: Request, res: Response) => {
    const { id } = req.params;
    const { requesterId } = req.body;

    if (!requesterId) {
        return res.status(400).send("ID do solicitante é obrigatório.");
    }
    
    const result = PostBusiness.deletePostLogic(id, requesterId);
    res.status(result.status).send(result.message);
};
