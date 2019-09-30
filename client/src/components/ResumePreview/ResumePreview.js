import React , {Component} from 'react';

import './ResumePreview.css';

class ResumePreview extends Component {
    state = {}
    render() {
        return (<div id="resumePreview">
            <div id="header">
                <h1>اسم شخص</h1>
                <h2>موقعیت شغلی</h2>
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