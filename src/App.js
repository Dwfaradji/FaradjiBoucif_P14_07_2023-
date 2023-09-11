import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import RouterApp from "./Routers/RoutesPath";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
    return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <RouterApp/>
                </div>
            </Router>
    );
}

export default App;
