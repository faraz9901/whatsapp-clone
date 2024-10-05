import express from "express";
import { createUser, loginUser } from "../controllers/user.controller";
import { tryCatch } from "../utils/tryCatch";

const router = express.Router()

router.post("/create", tryCatch(createUser))

router.post("/login", tryCatch(loginUser))



export default router;