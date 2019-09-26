import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={HomePage} exact/>
            <Route path="/personalinfo" component={PersonalInfo} />
            <Route path="/skills" component={Skills} />

        </BrowserRouter>
    );
}

export default App;
