import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Skills from "./components/Skills/Skills";
import WorkExperience from './components/WorkExperience/WorkExperience';
// import Education from './components/Education/Education';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={HomePage} exact/>
            <Route path="/personalinfo" component={PersonalInfo} />
            <Route path="/skills" component={Skills} />
            <Route path="/workexperience" component={WorkExperience} />
            {/*<Route path="/education" component={Education} />*/}
        </BrowserRouter>
    );
}

export default App;
