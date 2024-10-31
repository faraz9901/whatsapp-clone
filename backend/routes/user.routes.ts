import express from "express";
import { validateOtp, loginUser, logoutUser, getCurrentUser } from "../controllers/user.controller";
import { tryCatch } from "../utils/tryCatch";
import { verifyUser } from "../middlewares/verifyUser";

const router = express.Router()

router.post("/login", tryCatch(loginUser))

router.post("/validate-otp", tryCatch(validateOtp))

router.get("/user", tryCatch(verifyUser), tryCatch(getCurrentUser))

router.put("/logout", tryCatch(logoutUser))


export default router;