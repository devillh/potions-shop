import React, {useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {url} from "../url.ts";

function UpdatePotion({allPotions}) {
    const [editedPotion, setEditedPotion] = useState({index: 0, name: "", desc: "", price: 0, img: ""});
    const [err, setErr] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditedPotion({...editedPotion, [name]: value});
    };

    const handleSubmit = async () => {
        let index = editedPotion.index - 1;

        const potion = editPotion(index);
        console.log(potion);
        await axios
            .put(url + "/potions", {
                id: potion.id,
                name: potion.name,
                price: potion.price,
                img: potion.img,
                desc: potion.desc
            })
            .then(res => {
                if (res.status !== 200) {
                    setErr(true);
                }
            });
    };

    const editPotion = (index) => {
      let oldPotion = allPotions[index];

      if (editedPotion.name)
            oldPotion.name = editedPotion.name;
        if (editedPotion.price > 0)
            oldPotion.price = editedPotion.price;
        if (editedPotion.img)
            oldPotion.img = editedPotion.img;
        if (editedPotion.desc)
            oldPotion.desc = editedPotion.desc;

        return oldPotion;
    };

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="title">
                    <h1>
                        Edit a potion
                    </h1>
                    { err && <span className="error">A value was incorrect, try again please.</span> }
                </div>
                <Grid container alignItems="center" justify="center" className="center-items">
                    <Grid item>
                        <div className="form-bg edit-input">
                            <TextField
                                variant="filled"
                                id="index"
                                label="Potion's number"
                                type="number"
                                name="index"
                                fullWidth
                                value={ editedPotion.index }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="form-bg edit-input">
                            <TextField
                                variant="filled"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                fullWidth
                                value={ editedPotion.name }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="form-bg edit-input">
                            <TextField
                                variant="filled"
                                id="price"
                                label="Price in dollars"
                                type="number"
                                name="price"
                                fullWidth
                                value={ editedPotion.price }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="center" className="center-items">
                    <Grid item>
                        <div className="form-bg edit-input">
                            <TextField
                                variant="filled"
                                id="img"
                                label="Image's link"
                                type="text"
                                name="img"
                                fullWidth
                                value={ editedPotion.img }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="form-bg edit-input">
                            <TextField
                                variant="filled"
                                id="desc"
                                label="Description"
                                type="text"
                                name="desc"
                                fullWidth
                                multiline
                                rows={4}
                                value={ editedPotion.desc }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <div className="edit-input center-items">
                        <Button size="large" variant="contained" color="primary" type="submit">
                            Update
                        </Button>
                    </div>
                </Grid>
            </form>
        </div>
    );
}

export default UpdatePotion;