import React, { Component } from 'react';
import axios from 'axios';
//import { saveAs } from "file-saver";

import Button from '../UI/Button/Button';

import './ResumePreview.css';

class ResumePreview extends Component {
    state = {};

    handleDownloadButton = (e) => {
        axios(`/getPdf`, {
            method: "GET",
            responseType: "blob"
        })
            .then(response => {
                const file = new Blob([response.data], {
                    type: "application/pdf"
                });
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL);
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {

        axios.post('/create-pdf', this.props.location);
    }


    renderEducation = () => {

        const items = this.props.location.state.education.map((val, i) => {
            return (
                <li key={i}>
                    <h4>{val.degree} {val.major}</h4>
                    <h5>{val.university}</h5>
                    <h6>{val.month}/{val.year}</h6>
                </li>
            )
        });
        return items;
    }

    renderSkills = () => {
        const items = this.props.location.state.skills.map((val, i) => {
            return (
                <li key={i}>
                    <h4>{val.skillText}</h4>
                    <h5>{val.level}</h5>
                </li>
            )
        });
        return items;
    }

    renderWorkExperience = () => {
        const items = this.props.location.state.experiences.map((val, i) => {
            return (
                <div key={i}>
                    <h2>{val.jobTitle}</h2>
                    <h4>{val.toMonth}/{val.toYear} - {val.fromMonth}/{val.fromYear}</h4>
                    <h3>{val.companyName}</h3>
                </div>
            )
        });
        return items;
    }


    renderContact = () => {
        const contact = this.props.location.state.contactInfo;
        return (
            <div id="contacts">
                <h3>{contact.email}</h3>
                <h3>{contact.phoneNumber}</h3>
                <h4>{contact.github}</h4>
                <h4>{contact.linkedIn}</h4>
            </div>
        )
    }



    render() {
        return (
            <div id="resumePreview">
                <div id="header" >
                    <h1>{this.props.location.state.personalInfo.fullName}</h1>
                    <h2>{this.props.location.state.personalInfo.jobTitle}</h2>
                    <Button clicked={this.handleDownloadButton}>دریافت فایل</Button>
                </div>
                <div id="headerDivider"></div>
                <div id="rightPanel">
                    <div id="educationPanel">
                        <h3>تحصیلات</h3>
                        <div className="headerDivider"></div>
                        <ul>
                            {this.renderEducation()}
                        </ul>
                    </div>
                    <div id="skillsPanel">
                        <h3>مهارت ها</h3>
                        <div className="headerDivider"></div>
                        <ul>
                            {this.renderSkills()}
                        </ul>
                    </div>


                    <div id="contactPanel">
                        <h3>راه های ارتباطی</h3>
                        <div className="headerDivider"></div>
                        {this.renderContact()}
                    </div>
                </div>
                <div id="panelsDivider"></div>
                <div id="leftPanel" >
                    <div id="abouteMe" >
                        <h3>درباره من</h3>
                        <h4>{this.props.location.state.personalInfo.sex} - {this.props.location.state.personalInfo.birthYear}</h4>
                        <div className="headerDivider"></div>
                        <p>{this.props.location.state.personalInfo.aboutMe}</p>
                    </div>
                    <div id="workExperienceContainer" >
                        <h3>سابقه کاری</h3>
                        <div className="headerDivider" ></div>
                        <div id="experiences" >
                            {this.renderWorkExperience()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResumePreview;