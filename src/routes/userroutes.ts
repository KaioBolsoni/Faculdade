import { Router } from "express";
import * as UserController from "../controller/usercontroller";

const router = Router();

router.get("/users/:id", UserController.getUserById);
router.get("/users/age-range", UserController.getUsersByAgeRange);
router.put("/users/:id", UserController.updateUser);

export default router;
