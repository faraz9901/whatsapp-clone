import express from "express";
import { tryCatch } from "../utils/tryCatch";
import { getChat } from "../controllers/chat.controller";
import { verifyUser } from "../middlewares/verifyUser";

const router = express.Router()

router.get("/", tryCatch(verifyUser), tryCatch(getChat))



export default router;