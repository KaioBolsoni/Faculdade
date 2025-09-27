import { User } from "../models/usermodels";
import { Post } from "../models/postmodels";

// "Tabela" de usuários em memória
export let users: User[] = [
  { id: "1", name: "Kaio", age: 22, role: "admin" },
  { id: "2", name: "Pablo", age: 23, role: "admin" },
  { id: "3", name: "Andre", age: 25, role: "user" },
];

// "Tabela" de posts em memória
export let posts: Post[] = [
  { id: "11", title: "Admins", content: "Kaio e Pablo", authorId: "1", published: true },
  { id: "12", title: "Fora admins", content: "Kaio e Pablo bandidos", authorId: "3", published: true },
  { id: "13", title: "Ban Andre", content: "Censura liberada...", authorId: "2", published: false },
];

