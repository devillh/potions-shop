import "./Login.css";
import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import {url} from "../url.ts";

import { useState } from "react";

function Login({ setConnected }) {
    const [avoidingLoop, setAvoidingLoop] = useState(false);
    const [users, setUsers] = useState([]);
    const [err, setErr] = useState(false);
    const [user, setUser] = useState({ email: "", pwd: "" });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!checkUser()) {
            setErr(true);
        }
        else
            setConnected(true);
    };

    const getUsers = async () => {
        if (!avoidingLoop) {
            await axios
                .get(url + "/users",
                    { responseType: "json" })
                .then(res => {
                    setUsers(res.data);
                });
            setAvoidingLoop(true);
        }

    }

    const checkUser = () => {
        for(let index = 0; index < users.length; index++) {
            if (user.email === users[index].email && user.pwd === users[index].pwd) {
                return true;
            }
        }
        return false;
    };

    getUsers().then();

    return (
        <div className="row">
            <div className="col title">
                <div>
                    <h1>Potions Shop</h1>
                </div>
                <div className="img">
                </div>
            </div>
            <div className="col" id="right-col">
                <div className="login-box">
                    <form onSubmit={ handleSubmit }>
                        <div>
                            <h3>Connection</h3>
                            { err && <span className="error">Wrong credentials, try again please.</span> }
                        </div>
                        <div className="form-bg">
                            <TextField
                                variant="filled"
                                id="username"
                                name="email"
                                label="E-mail"
                                type="text"
                                value={ user.email }
                                onChange={ handleInputChange }
                        />
                        </div>
                        <div className="form-bg">
                            <TextField
                                variant="filled"
                                id="pwd"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                name="pwd"
                                value={ user.pwd }
                                onChange={ handleInputChange }
                        />
                        </div>
                        <div>
                            <Button size="large" variant="contained" color="primary" type="submit">
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;