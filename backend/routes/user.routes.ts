import express from "express";
import { validateOtp, loginUser } from "../controllers/user.controller";
import { tryCatch } from "../utils/tryCatch";

const router = express.Router()

router.post("/login", tryCatch(loginUser))

router.post("/validate-otp", tryCatch(validateOtp))


export default router;