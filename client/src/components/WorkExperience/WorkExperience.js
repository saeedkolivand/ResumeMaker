import React, { Component } from 'react';
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
        for (let i = 1350; i <= 1398; i++) {
            years.push(i);
        }
        return years;
    };

    monthList = () => [
        'فروردین','اردیبهشت','خرداد',
        'تیر', 'مرداد','شهریور',
        'مهر','آبان','آذر',
        'دی','بهمن','اسفند'
    ];

    currentExperience = { experienceText: '', fromYear: '', fromMonth:'', toYear: '', toMonth: '' };
    handleAddNewExperienceText = (event) => {
        this.currentExperience.experienceText = event.target.value;
    };

    handleFromYear = (event) => {
        this.currentExperience.fromYear = event.target.value;
    };

    handleFromMonth = (event) => {
        this.currentExperience.fromMonth = event.target.value;
    };

    handleToYear = (event) => {
        this.currentExperience.toYear = event.target.value;
    };

    handleToMonth = (event) => {
        this.currentExperience.toMonth = event.target.value;
    };

    handleAddExperience = () => {
        let oldExperiences = [...this.state.experiences];
        if (this.currentExperience.fromYear.length) {
                oldExperiences.push({ experienceText: this.currentExperience.experienceText,
                    fromYear: this.currentExperience.fromYear, fromMonth: this.currentExperience.fromMonth,
                    toYear: this.currentExperience.toYear, toMonth: this.currentExperience.toMonth });
                    this.setState({ experiences: oldExperiences });
                    this.currentExperience = { experienceText: '', fromYear: '', fromMonth:'', toYear: '', toMonth: '' };
                    document.getElementById('experienceInput').value = '';
                    document.getElementById('experienceInput').focus();
                    document.getElementById('fromYear').value = '-';
                    document.getElementById('toMonth').value = '-';
                    document.getElementById('toYear').value = '-';
                    document.getElementById('fromMonth').value = '-';
        } else {
            const experienceInput = document.getElementById('experienceInput');
            const borderStyle = "1px solid red";
            if (!experienceInput.value.length) {
                experienceInput.style.border = borderStyle;
            }
        }
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
                    <span>{experience.experienceText}</span><br />
                    <span onClick={() => this.handleDeleteExperience(i)}>*</span>
                </div>);
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
                    <Input id="experienceInput" changed={this.handleAddNewExperienceText} value={this.state.experiences}
                           placeholder="سوابق  خود را وارد کنید" autocomplete="off" type="text" name="experienceText" /> <br />
                    <label>سال شروع</label><Select id="fromYearSelector" changed={this.handleFromYear} options={this.yearList()} />
                    <label>ماه شروع</label><Select id="fromMonthSelector" changed={this.handleFromMonth} options={this.monthList()} />
                    <label>سال پایان</label><Select id="toYearSelector" changed={this.handleToYear} options={this.monthList()} />
                    <label>ماه پایان</label><Select id="toMonthSelector" changed={this.handleToMonth} options={this.yearList()} />
                    <Button clicked={this.handleAddExperience} bgColor="#ff6666" color="white">+</Button>
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