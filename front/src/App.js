import './App.css';
import Login from "./Login/Login";
import Home from "./Home/Home";
import { useState } from "react";

function App() {
    const [connected, setConnected] = useState(false);

    return (
        <div>
            { !connected && <Login setConnected={setConnected} /> }
            { connected && <Home /> }
        </div>
    );
}

export default App;
