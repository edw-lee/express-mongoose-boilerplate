import { Router } from "express";
import * as appController from "../controllers/app.controller.js";
import { middleware } from "../middleware/app.middleware.js";

const router = Router();

router.get("/", middleware, appController.get);

router.post("/", middleware, appController.post);

router.put("/", middleware, appController.put);

router.delete("/", middleware, appController._delete);

export default router;