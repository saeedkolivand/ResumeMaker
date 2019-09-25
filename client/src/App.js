import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={HomePage} exact/>
            <Route path="/personalinfo" component={PersonalInfo} />

        </BrowserRouter>
    );
}

export default App;
