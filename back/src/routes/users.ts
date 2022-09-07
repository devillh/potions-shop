import { Router, Request, Response } from "express";
import {  User } from "../utils/models/user";

const router : Router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get the users list.
 *     description: Gets all the users details.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             name:
 *               type: array
 *               description: An array empty or with User objects.
 *               example: []
 */

router.get("/", async (req: Request, res: Response) => {
    const allUsers = await User.find({});

    if (!allUsers)
        res.status(400).send("Error: Empty data.");

    return (res.status(200).json(allUsers));
});

export default router;