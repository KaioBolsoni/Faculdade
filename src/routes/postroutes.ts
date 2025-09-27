import { Router } from "express";
import * as PostController from "../controller/postcontroller";

const router = Router();

router.post("/posts", PostController.createPost);
router.patch("/posts/:id", PostController.updatePost);
router.delete("/posts/:id", PostController.deletePost);

export default router;
