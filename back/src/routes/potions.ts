import { Router, Request, Response } from "express";
import { Potion } from "../utils/models/potion";

const router : Router = Router();

// Get all potions in an array
router.get("/", async (req: Request, res: Response) => {
    const allPotions = await Potion.find({});

    if (!allPotions)
        res.status(400).send("Error: Empty data.");

    return (res.status(200).json(allPotions));
});

// Create a new potion
router.post("/", async (req: Request, res: Response) => {
    if (!req.body)
        return (res.status(400).send("Error: Data is empty."));

    const potion = new Potion({
        id: req.body.name + new Date().toLocaleString(),
        name: req.body.name,
        type: req.body.type,
        desc: req.body.desc,
        price: req.body.price,
        img: req.body.img,
        created: new Date().toLocaleString()
    });

    await potion.save()
        .catch(() => res
            .status(403).json("Error: Potion's update failed.")
            .status(500).json("Error: Connexion to the server failed."));

    return (res.status(200).json(potion));
});

// Update a potion's details
router.put("/", async (req: Request, res: Response) => {
    if (req.body == null)
        return (res.status(400).send("Error: Data is empty."))

    //  !! Need to change the way to update
    //
    //  const potion = await Potion.find({ id: req.body.id });
    //
    //  await potion.save()
    //    .catch(() => res
    //        .status(405).json("Error: Potion's update failed.")
    //        .status(500).json("Error: Connexion to the server failed."));

    return (res.status(200).send("Potion successfully updated."));
});

// Delete a potion
router.delete("/", async (req: Request, res: Response) => {
    if (!req.body)
        return (res.status(400).send("Error: Data is empty."));

    // !!Doesn't work, need to change
    await Potion.deleteOne({ id: req.body.id })
        .catch(() => res
            .status(405).json("Error: Potion could not be deleted.")
            .status(500).json("Error: Connexion to the server failed."));

    return (res.status(200));
});

export default router;