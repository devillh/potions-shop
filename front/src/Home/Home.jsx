import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PotionCard from "../PotionCard/PotionCard";
import {Grid} from "@mui/material";
import React, {useState} from "react";
import axios from "axios";
import CreatePotion from "../CreatePotion/CreatePotion";
import UpdatePotion from "../UpdatePotion/UpdatePotion";

function Home() {
    const [getLoop, setGetLoop] = useState(0);
    const [toDelete, setToDelete] = useState(-1);
    const [err, setErr] = useState(false);
    const [potions, setPotions] = useState([]);

    const handleSubmit = () => {
        console.log(potions)
        console.log(toDelete)
        axios
            .delete("http://127.0.0.1:5000/potions", {data: {id : potions[toDelete].id}}
                )
            .then(async (res) => {
                if (res.status === 200) {
                    await getPotions(true);
                }
                else
                    setErr(true);
            })
    };

    const getPotions = async (refresh) => {
        if (getLoop === 0 || refresh)
            await axios
                .get("http://127.0.0.1:5000/potions")
                .then(res => {
                    setGetLoop(1);
                    if (res.status === 200) {
                        setPotions(res.data);
                    }
                })
    };

    if (toDelete > -1) {
        handleSubmit();
        setToDelete(-1);
    }
    getPotions().then();
    return (
        <div>
            < Header />
            <div className="background-home">
                <CreatePotion />
                <div className="title">
                    <h1>
                        Potions list
                    </h1>
                </div>
                <Grid container id="all-cards" spacing={1} >
                    { potions.map((potion, index) => (
                    <Grid className="card" key={index}>
                        <PotionCard nb={index} name={potion.name} price={potion.price} desc={potion.desc} img={potion.img} setToDelete={setToDelete}/>
                    </Grid>
                    ))}
                </Grid>
                {/*<UpdatePotion allPotions={ potions }/>*/}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
