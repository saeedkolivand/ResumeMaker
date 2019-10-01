import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from "file-saver";

import Button from '../UI/Button/Button';

import './ResumePreview.css';

class ResumePreview extends Component {
    state = {}

    handledownloadButton = (e) => {
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
    }

    componentDidMount() {
        console.log(this.props.location.state);
        
        axios.post('/create-pdf' , this.props.location);
    }


    render() {
        return (<div id="resumePreview">
            <div id="header">
                <h1>اسم شخص</h1>
                <h2>موقعیت شغلی</h2>
                <Button clicked={this.handledownloadButton}>دانلود فایل</Button>
            </div>
            <div id="headerDivider"></div>
            <div id="rightPanel">
                <div id="educationPanel">
                    <h3>تحصیلات</h3>
                    <div className="headerDivider"></div>
                </div>
                <div id="skillsPanel">
                    <h3>مهارت ها</h3>
                    <div className="headerDivider"></div>
                </div>


                <div id="contactPanel">
                    <h3>تماس با ما</h3>
                    <div className="headerDivider"></div>
                </div>
            </div>
            <div id="panelsDivider"></div>
            <div id="leftPanel">
                <div id="abouteMe">
                    <h3>درباره من</h3>
                    <div className="headerDivider"></div>
                </div>
                <div id="workExperienceContainer">
                    <h3>سابقه کاری</h3>
                    <div className="headerDivider"></div>
                </div>
            </div>
        </div>);
    }
}

export default ResumePreview;