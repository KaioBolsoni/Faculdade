import { users } from "../data/database";
import { User } from "../models/usermodels";

// Encontra um usuário pelo ID
export const findUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};

// Filtra usuários por faixa de idade
export const findUsersByAgeRange = (min: number, max: number): User[] => {
  return users.filter((u) => u.age >= min && u.age <= max);
};

// Atualiza um usuário existente
export const updateUserLogic = (id: string, name: string, age: number, role: "user" | "admin"): User | undefined => {
  const user = findUserById(id);
  if (user) {
    user.name = name;
    user.age = age;
    user.role = role;
  }
  return user;
};
