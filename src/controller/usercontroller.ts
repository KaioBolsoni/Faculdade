import { Request, Response } from "express";
import * as UserBusiness from "../business/userbusiness";

export const getUserById = (req: Request, res: Response) => {
  const user = UserBusiness.findUserById(req.params.id);
  if (!user) {
    return res.status(404).send("Usuário não encontrado.");
  }
  res.status(200).send(user);
};

export const getUsersByAgeRange = (req: Request, res: Response) => {
  const min = parseInt(req.query.min as string);
  const max = parseInt(req.query.max as string);

  if (isNaN(min) || isNaN(max)) {
    return res.status(400).send("Parâmetros 'min' e 'max' devem ser números.");
  }

  const filteredUsers = UserBusiness.findUsersByAgeRange(min, max);
  res.status(200).send(filteredUsers);
};

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const user = UserBusiness.findUserById(id);
    if (!user) {
      return res.status(404).send("Usuário não encontrado.");
    }
    
    const { name, age, role } = req.body;
    if (!name || age == null || !role) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

    const updatedUser = UserBusiness.updateUserLogic(id, name, age, role);
    res.status(200).send(updatedUser);
};
