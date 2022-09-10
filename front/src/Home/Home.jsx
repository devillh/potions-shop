import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PotionCard from "../PotionCard/PotionCard";
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import axios from "axios";
import CreatePotion from "../CreatePotion/CreatePotion";
import UpdatePotion from "../UpdatePotion/UpdatePotion";

function Home() {
    const [getLoop, setGetLoop] = useState(0);
    const [toDelete, setToDelete] = useState({id: 0});
    const [err, setErr] = useState(false);
    const [potions, setPotions] = useState([]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setToDelete({...toDelete, [name]: value});
    };

    const handleSubmit = () => {
        console.log(toDelete.id)
        if (toDelete.id > 0)
        {
            let index = toDelete.id - 1;
            axios
                .delete("http://127.0.0.1:5000/potions", {data: {id : potions[index].id}}
                    )
                .then(async (res) => {
                    console.log(res);

                    if (res.status === 200) {
                        await getPotions(true);
                    }
                })
        }
        else
            setErr(true);
    };

    const getPotions = async (refresh) => {
        if (getLoop === 0 || refresh)
            await axios
                .get("http://127.0.0.1:5000/potions")
                .then(res => {
                    setGetLoop(1);
                    console.log("loop");
                    if (res.status === 200) {
                        setPotions(res.data);
                    }
                })
    };

    getPotions().then();

    return (
        <div>
            < Header />
            <div className="background-home">
                <div className="title">
                    <h1>
                        Potions list
                    </h1>
                </div>
                <Grid container className="all-cards" spacing={1} >
                    {potions.map((potion, index) => (
                    <Grid className="card" key={index}>
                        <PotionCard nb={index} name={potion.name} price={potion.price} desc={potion.desc} img={potion.img}/>
                    </Grid>
                    ))}
                </Grid>
                <CreatePotion />
                <UpdatePotion allPotions={potions}/>
                    <div className="title">
                        <h1>
                            Delete a potion
                        </h1>
                        { err && <span className="error">A value was incorrect, try again please.</span> }
                    </div>
                    <Grid container alignItems="center" justify="center" className="grid-create">
                        <Grid item>
                            <div className="field small-input">
                                <TextField
                                    variant="filled"
                                    id="id"
                                    label="Potion's number"
                                    type="number"
                                    name="id"
                                    value={ toDelete.id }
                                    onChange={ handleInputChange }
                                />
                            </div>
                        </Grid>
                        <div className="small-input">
                            <Button size="large" variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                                Delete
                            </Button>
                        </div>
                    </Grid>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
