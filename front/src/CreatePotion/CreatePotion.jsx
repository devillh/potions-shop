import React, {useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreatePotion() {
    const [newPotion, setNewPotion] = useState({name: "", desc: "", price: 0, img: ""});
    const [errLink, setErrLink] = useState(false);
    const [errSizeName, setErrSizeName] = useState(false);
    const [err, setErr] = useState(false);


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewPotion({...newPotion, [name]: value});

        // Check if the name is short enough to fit in the card
        if (e.target.name === "name" && e.target.value.length > 22)
            setErrSizeName(true);
        else
            setErrSizeName(false);

        // Check if the image is a link
        if (e.target.name === "img" && e.target.value.length > 10) {
            if (e.target.value.substr(0, 7) === "http://" || e.target.value.substr(0, 8) === "https://")
                setErrLink(false);
            else
                setErrLink(true);
        }

        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        // Check if the data is complete before calling the API route
        if (newPotion.name.length < 5 || newPotion.img < 10 || newPotion.desc < 5) {
            setErr(true);
        }
        else {
            await axios
                .post("http://127.0.0.1:5000/potions", {
                    name: newPotion.name,
                    price: newPotion.price,
                    img: newPotion.img,
                    desc: newPotion.desc
                })
                .then(res => {
                    if (res.status === 200) {
                        setErrSizeName(false);
                        setErrLink(false);
                        setErr(false);
                    } else
                        setErr(true);
                });
        }

        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="title">
                    <h1>
                        Create a potion
                    </h1>
                    { err && <span className="error">Complete all the form with at least 5 characters and try again please.</span> }
                    { errLink && <span className="error">Your image is not a link, try again please.</span> }
                    { errSizeName && <span className="error">The name is too long, please shorten it.</span> }
                </div>
                <Grid container alignItems="center" justify="center" className="center-items">
                    <Grid item>
                        <div className="form-bg small-input">
                            <TextField
                                variant="filled"
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                                fullWidth
                                value={ newPotion.name }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="form-bg small-input">
                            <TextField
                                variant="filled"
                                id="price"
                                label="Price in dollars"
                                type="number"
                                name="price"
                                fullWidth
                                value={ newPotion.price }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="form-bg small-input">
                            <TextField
                                variant="filled"
                                id="img"
                                label="Image's link"
                                type="text"
                                name="img"
                                fullWidth
                                value={ newPotion.img }
                                onChange={ handleInputChange }
                            />
                        </div>
                    </Grid>
                    <Grid item>
                        <div className="form-bg small-input" id="large-input-create">
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
                    <div className="small-input center-items">
                        <Button size="large" variant="contained" color="primary" type="submit" disabled={ errLink || errSizeName }>
                            Create
                        </Button>
                    </div>
                </Grid>
            </form>
        </div>
    )
}

export default CreatePotion;