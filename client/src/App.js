import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Skills from "./components/Skills/Skills";
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
// import Preview from './components/Preview/Preview';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={HomePage} exact/>
            <Route path="/personalinfo" component={PersonalInfo} />
            <Route path="/skills" component={Skills} />
            <Route path="/workexperience" component={WorkExperience} />
            <Route path="/education" component={Education} />
            <Route path="/contact" component={Contact} />
            {/*<Route path="/preview" component={Preview} />*/}
        </BrowserRouter>
    );
}

export default App;
