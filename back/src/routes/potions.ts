import { Router, Request, Response } from "express";
import { Potion } from "../utils/models/potion";

const router : Router = Router();

// Get all potions in an array
router.get("/", async (req: Request, res: Response) => {
    const allPotions = await Potion.find({});

    if (!allPotions)
        res.status(400).send("Error: Empty data.");
    console.log("ROUTE: ", allPotions)
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
            .status(403).json("Error: Potion's creation failed."));

    return (res.status(200).json(potion));
});

// Update a potion's details
router.put("/", async (req: Request, res: Response) => {
    if (req.body == null)
        return (res.status(400).send("Error: Data is empty."))

    const potion = {
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        desc: req.body.desc,
        price: req.body.price,
        img: req.body.img,
        created: req.body.created,
        updated: new Date().toLocaleString()
    };

    await Potion.findOneAndUpdate({ id: potion.id }, potion)
        .catch(() => res
            .status(405).json("Error: Potion's update failed."));

    return (res.status(200).send(potion));
});

// Delete a potion
router.delete("/", async (req: Request, res: Response) => {
    if (!req.body)
        return (res.status(400).send("Error: Data is empty."));
    console.log(req.body)
    await Potion.deleteOne({ id: req.body.id }).then(res => console.log(res))
        .catch(() => res
            .status(405).json("Error: Potion could not be deleted."));

    return (res.status(200).send("The potion has been deleted."));
});

export default router;