import './App.css';
import Login from "./Login/Login";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        // creation of admin account
        axios
            .post("http://127.0.0.1:5000/users",{
                    name: "admin",
                    email: "admin@potions-shop.com",
                    pwd: "root"
                })
            .then(res => {
                if (res.status !== 200) {
                    alert(res.status);
            }
        });

        // creation of a user account
        axios
            .post("http://127.0.0.1:5000/users",{
                    'name': 'visitor',
                    'email': 'visitor@anymail.com',
                    'pwd': 'password'
                })
            .then(res => {
                if (res.status !== 200) {
                    alert(res.status);
                }
            });
    });

    return (
        <div>
            { !connected && <Login setConnected={setConnected} /> }
            { connected && <span>Vous êtes connecté, trop bien !</span> }
        </div>
    );
}

export default App;
