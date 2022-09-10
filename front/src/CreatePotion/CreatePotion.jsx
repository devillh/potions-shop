import React, {useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreatePotion() {
    const [newPotion, setNewPotion] = useState({name: "", desc: "", price: 0, img: ""});
    const [err, setErr] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewPotion({...newPotion, [name]: value});
    };

    const handleSubmit = async () => {
            await axios
                .post("http://127.0.0.1:5000/potions", {
                    name: newPotion.name,
                    price: newPotion.price,
                    img: newPotion.img,
                    desc: newPotion.desc
                })
                .then(res => {
                    if (res.status !== 200) {
                        setErr(true);
                    }
                });
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="title">
                    <h1>
                        Create a potion
                    </h1>
                    { err && <span className="error">A value was incorrect, try again please.</span> }
                </div>
                <Grid container alignItems="center" justify="center" className="grid-create">
                    <Grid item>
                        <div className="field small-input">
                            <TextField
                                variant="filled"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                value={ newPotion.name }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="field small-input">
                            <TextField
                                variant="filled"
                                id="price"
                                label="Price in dollars"
                                type="number"
                                name="price"
                                value={ newPotion.price }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="field small-input">
                            <TextField
                                variant="filled"
                                id="img"
                                label="Image's link"
                                type="text"
                                name="img"
                                value={ newPotion.img }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="field large-input">
                            <TextField
                                variant="filled"
                                id="desc"
                                label="Description"
                                type="text"
                                name="desc"
                                fullWidth
                                multiline
                                rows={4}
                                value={ newPotion.desc }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <div className="small-input">
                        <Button size="large" variant="contained" color="primary" type="submit">
                            Create
                        </Button>
                    </div>
                </Grid>
            </form>
        </div>
    )
}

export default CreatePotion;