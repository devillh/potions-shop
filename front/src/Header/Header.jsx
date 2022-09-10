import "./Header.css";
import { ReactComponent as Logo } from "../assets/img/Potions shop logo.svg";
import { Button } from "@mui/material";
import React from "react";

function Header() {

    return (
        <div className="background">
            <div className="spacing-items">
                <div className="logo">
                    <div>
                        <Logo alt="Logo of Potions Shop" width="5vw" height="5vw" />
                    </div>
                    <div className="welcome">
                        Welcome to Potions Shop!
                    </div>
                </div>
                <div className="logout">
                    <Button size="small" variant="contained" color="secondary" type="submit" disabled>
                        Log out
                    </Button>
                </div>
            </div>
        </div>
);
}

export default Header;
