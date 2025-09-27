import { posts } from "../data/database";
import { Post } from "../models/postmodels";
import { findUserById } from "./userbusiness";


export const findPostById = (id: string): Post | undefined => {
  return posts.find((p) => p.id === id);
};


export const createPost = (title: string, content: string, authorId: string): Post => {
  const newPost: Post = {
    id: toString(),
    title,
    content,
    authorId,
    published: false,
  };
  posts.push(newPost);
  return newPost;
};


export const updatePost = (id: string, data: { title?: string; content?: string; published?: boolean }): Post | undefined => {
  const post = findPostById(id);
  if (post) {
    if (data.title) post.title = data.title;
    if (data.content) post.content = data.content;
    if (typeof data.published === "boolean") post.published = data.published;
  }
  return post;
};


export const deletePost = (postId: string, requesterId: string): { success: boolean, message: string, status: number } => {
    const postIndex = posts.findIndex((p) => p.id === postId);
    if (postIndex === -1) {
        return { success: false, message: "Post não encontrado.", status: 404 };
    }

    const post = posts[postIndex];
    const requester = findUserById(requesterId);
    
    if (!requester) {
        return { success: false, message: "Usuário solicitante não encontrado.", status: 403 };
    }

    if (requester.id !== post.authorId && requester.role !== "admin") {
        return { success: false, message: "Permissão negada.", status: 403 };
    }

    posts.splice(postIndex, 1);
    return { success: true, message: "Post deletado.", status: 200 };
};
