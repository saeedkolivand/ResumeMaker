import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Skills from "./components/Skills/Skills";
import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={HomePage} exact/>
            <Route path="/personalinfo" component={PersonalInfo} />
            <Route path="/skills" component={Skills} />
            <Route path="/workexperience" component={WorkExperience} />
        </BrowserRouter>
    );
}

export default App;
