import { Router } from "express";
import { homeController } from "./app/controller/HomeController";

const router: Router = Router()

//Routes
router.get("/", homeController.home);

export { router };