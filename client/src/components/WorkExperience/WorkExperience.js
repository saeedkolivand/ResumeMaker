import React, {Component} from 'react';
import './WorkExperience.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from '../UI/Select/Select';

class WorkExperience extends Component {

    state = {
        experiences: [],
        outAnim: false
    };

    componentDidMount() {
        console.log(this.props.location);

    }

    yearList = () => {
        let years = [];
        for (let i = 1398; i >= 1350; i--) {
            years.push(i);
        }
        return years;
    };

    monthList = () => [
        'فروردین', 'اردیبهشت', 'خرداد',
        'تیر', 'مرداد', 'شهریور',
        'مهر', 'آبان', 'آذر',
        'دی', 'بهمن', 'اسفند'
    ];

    currentExperience = {
        jobTitle: '',
        companyName: '',
        fromMonth: '',
        fromYear: '',
        toMonth: '',
        toYear: ''
    };

    handleJobTitle = (event) => {
        this.currentExperience.jobTitle = event.target.value;
    };

    handleCompanyName = (event) => {
        this.currentExperience.companyName = event.target.value;
    };

    handleFromMonth = (event) => {
        this.currentExperience.fromMonth = event.target.value;
    };

    handleFromYear = (event) => {
        this.currentExperience.fromYear = event.target.value;
    };

    handleToMonth = (event) => {
        this.currentExperience.toMonth = event.target.value;
    };

    handleToYear = (event) => {
        this.currentExperience.toYear = event.target.value;
    };

    handleAddExperience = () => {
        let oldExperiences = [...this.state.experiences];
        oldExperiences.push({
            jobTitle: this.currentExperience.jobTitle,
            companyName: this.currentExperience.companyName,
            fromYear: this.currentExperience.fromYear,
            fromMonth: this.currentExperience.fromMonth,
            toYear: this.currentExperience.toYear,
            toMonth: this.currentExperience.toMonth
        });
        this.setState({experiences: oldExperiences});
        this.currentExperience = {
            jobTitle: '',
            companyName: '',
            fromMonth: '',
            fromYear: '',
            toMonth: '',
            toYear: ''
        };
        document.getElementById('jobTitleInput').value = '';
        document.getElementById('jobTitleInput').focus();
        document.getElementById('companyNameInput').value = '';
        document.getElementById('companyNameInput').focus();
        document.getElementById('fromMonthSelector').value = '-';
        document.getElementById('fromYearSelector').value = '-';
        document.getElementById('toMonthSelector').value = '-';
        document.getElementById('toYearSelector').value = '-';
    };

    handleDeleteExperience = (index) => {

        let oldExperiences = [...this.state.experiences];

        oldExperiences.splice(index, 1);
        this.setState({
            experiences: [...oldExperiences]
        })
    };

    handleSubmit = () => {
        this.setState({
            outAnim: true
        }, () => setTimeout(() => {
            this.props.history.push({
                pathname: '/education',
                state: {
                    ...this.props.location.state,
                    experiences: this.state.experiences
                }
            });
        }, 300));
    };

    experienceContainerRenderer = () => {
        let element = null;
        if (this.state.experiences.length) {
            element = this.state.experiences.map((experience, i) => {
                return (
                    <div className="addedExperienceBox" key={i}>
                        <label className="addedExperienceBoxLabels">سمت:</label><p
                        className="addedExperienceBoxOutputs">{experience.jobTitle}</p>
                        <label className="addedExperienceBoxLabels">نام شرکت:</label><p
                        className="addedExperienceBoxOutputs">{experience.companyName}</p><br/>
                        <label className="addedExperienceBoxLabels">از:</label><p
                        className="addedExperienceBoxOutputs">{experience.fromMonth}</p><p
                        className="addedExperienceBoxOutputs">{experience.fromYear}</p>
                        <label className="addedExperienceBoxLabels">تا:</label><p
                        className="addedExperienceBoxOutputs">{experience.toMonth}</p><p
                        className="addedExperienceBoxOutputs">{experience.toYear}</p>
                        <div className="deleteIcon" onClick={() => this.handleDeleteExperience(i)}/>
                    </div>
                );
            })

        }
        return element;
    };

    render() {
        let experienceStyle = {};
        if (this.state.outAnim) {
            experienceStyle = {
                transform: 'translateX(500px)',
                opacity: 0
            }
        }
        return (
            <div id="workExperience" style={experienceStyle}>
                <p>سوابق شغلی</p>
                <div id="formWrapper">
                    <Input id="jobTitleInput" changed={this.handleJobTitle} value={this.state.experiences}
                           placeholder="عنوان شغلی" autocomplete="off" type="text" name="jobTitle"/>
                    <Input id="companyNameInput" changed={this.handleCompanyName} value={this.state.experiences}
                           placeholder="نام شرکت" autocomplete="off" type="text" name="companyName"/> <br/>
                    <label>سال شروع</label><Select id="fromYearSelector" changed={this.handleFromYear}
                                                   options={this.yearList()}/>
                    <label>ماه شروع</label><Select id="fromMonthSelector" changed={this.handleFromMonth}
                                                   options={this.monthList()}/>
                    <label>سال پایان</label><Select id="toYearSelector" changed={this.handleToYear}
                                                    options={this.yearList()}/>
                    <label>ماه پایان</label><Select id="toMonthSelector" changed={this.handleToMonth}
                                                    options={this.monthList()}/>
                    <Button clicked={this.handleAddExperience} bgColor="#ff6666" color="white">+</Button><br/>
                    {this.experienceContainerRenderer()}
                </div>
                <Button bgColor="#0099ff" color="white" clicked={this.handleSubmit}>
                    مرحله بعد
                </Button>
            </div>
        );
    }
}

export default WorkExperience;