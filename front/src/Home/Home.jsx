import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PotionCard from "../PotionCard/PotionCard";
import {Grid} from "@mui/material";
import React, {useState} from "react";
import axios from "axios";
import CreatePotion from "../CreatePotion/CreatePotion";
import UpdatePotion from "../UpdatePotion/UpdatePotion";
import {url} from "../url.ts";

function Home() {
    const [getLoop, setGetLoop] = useState(0);
    const [toDelete, setToDelete] = useState(-1);
    const [potions, setPotions] = useState([]);

    const handleSubmit = () => {
        axios
            .delete(url + "/potions", {data: {id : potions[toDelete].id}}
                )
            .then(async (res) => {
                if (res.status === 200) {
                    await getPotions(true);
                }
            })
    };

    const getPotions = async (refresh) => {
        if (getLoop === 0 || refresh)
            await axios
                .get(url + "/potions")
                .then(res => {
                    setGetLoop(1);
                    if (res.status === 200) {
                        setPotions(res.data);
                    }
                })
    };

    // Check if there is a potion to delete
    if (toDelete > -1) {
        handleSubmit();
        setToDelete(-1);
    }

    getPotions().then();
    return (
        <div>
            < Header />
            <div className="background-home">
                <Grid container spacing={1} direction="row" >
                    <Grid className="col">
                        <CreatePotion />
                    </Grid>
                    <Grid className="col">
                        <UpdatePotion allPotions={ potions }/>
                    </Grid>
                </Grid>
                <div className="title">
                    <h1>
                        Potions list
                    </h1>
                </div>
                <Grid container className="center-items" spacing={1} >
                    { potions.map((potion, index) => (
                        <Grid className="card" key={index}>
                            <PotionCard nb={index}
                                        name={potion.name}
                                        price={potion.price}
                                        desc={potion.desc}
                                        img={potion.img}
                                        setToDelete={setToDelete}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
