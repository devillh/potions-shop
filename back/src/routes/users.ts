import { Router, Request, Response } from "express";
import {  User } from "../utils/models/user";
import {Potion} from "../utils/models/potion";

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

    await user.save()
        .catch(() => res
            .status(403).json("Error: User creation failed.")
            .status(500).json("Error: Connexion to the server failed."));

    return (res.status(200).json(user));
});

export default router;