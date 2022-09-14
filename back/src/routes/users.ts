import { Router, Request, Response } from "express";
import {  User } from "../utils/models/user";

const router : Router = Router();

// Get all users
router.get("/", async (req: Request, res: Response) => {
    const allUsers = await User.find({});

    if (!allUsers)
        res.status(400).send("Error: Empty data.");

    return (res.status(200).json(allUsers));
});

// Create a new user
router.post("/", async (req: Request, res: Response) => {
    if (!req.body)
        return (res.status(400).send("Error: Data is empty."));

    const user = new User({
        id: req.body.name + new Date().toLocaleString(),
        name: req.body.name,
        pwd: req.body.pwd,
        email: req.body.email
    });

    await user.save();

    return (res.status(200).json(user));
});

export default router;