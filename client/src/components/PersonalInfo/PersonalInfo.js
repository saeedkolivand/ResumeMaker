import React, { Component } from 'react';
import "./PersonalInfo.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

class PersonalInfo extends Component {

    state = {
        outAnim: false
    };
    personalInfoData = {};

    createSelectItems = () => {
        let items = [];
        for (let i = 1350; i <= 1398; i++) {
            items.push(i);
        }
        return items;
    };


    clickHandler = async () => {
        if (this.personalInfoData.fullName && this.personalInfoData.jobTitle) {
            this.setState({
                outAnim: true
            }, () => setTimeout(() => {
                this.props.history.push({
                    pathname: '/skills',
                    state: {
                        personalInfo: this.personalInfoData
                    }
                });
            }, 200));
        } else {
            const jobTitleInput = document.getElementById('jobTitle');
            const fullNameInput = document.getElementById('fullName');
            const borderStyle = "1px solid red";
            if (!jobTitleInput.value.length) {
                jobTitleInput.style.border = borderStyle;
            }
            if (!fullNameInput.value.length) {
                fullNameInput.style.border = borderStyle;
            }
        }
    };

    handleInputChange = (event) => {
        if (event.target.id === "fullName") {
            this.personalInfoData.fullName = event.target.value;
        } else if (event.target.id === "jobTitle") {
            this.personalInfoData.jobTitle = event.target.value;
        } else if (event.target.id === "sex") {
            this.personalInfoData.sex = event.target.value;
        } else if (event.target.id === "birthYear") {
            this.personalInfoData.birthYear = event.target.value;
        }
    };

    renderCities = () => [
        'آذربایجان شرقی','آذربایجان غربی','اردبیل','اصفهان',
        'البرز','ایلام','بوشهر','تهران','چهارمحال و بختیاری','خراسان جنوبی','خراسان رضوی','خراسان شمالی','خوزستان',
        'زنجان','سمنان','سیستان و بلوچستان','فارس','قزوین','قم','کردستان','کرمان','کرمانشاه',
        'کهگیلویه وبویراحمد','گلستان','گیلان','لرستان','مازندران','مرکزی','هرمزگان','همدان','یزد'
    ];

    render() {

        let personalInfoStyle = {};
        console.log('PersonalInfo', this.state);
        if (this.state.outAnim) {
            personalInfoStyle = {
                transform: 'translateX(500px)',
                opacity: 1
            }
        }

        return (
            <div id="PersonalInfo" style={personalInfoStyle}>
                <p>اطلاعات فردی خودتونو وارد کنید</p>
                <div id="form-wrapper">
                    <Input id="fullName" changed={this.handleInputChange} placeholder="نام و نام خانوادگی"
                        autocomplete="off" type="text" name="fullName" /><br />
                    <Input id="jobTitle" changed={this.handleInputChange} autocomplete="off" placeholder="عنوان شغلی"
                        type="text" /><br />
                    <label>جنسیت: </label>
                    <Select id="sex" changed={this.handleInputChange}
                        options={['مرد', 'زن']} /><br />
                    <label>استان سکونت:</label>
                    <Select id="city" changed={this.handleInputChange}
                        options={this.renderCities()} /><br />
                    <label id="yearLabel">سال تولد: </label>
                    <Select id="birthYear" changed={this.handleInputChange} options={this.createSelectItems()} /><br />
                </div>
                <Button bgColor="#0099ff" color="white" clicked={this.clickHandler}>
                    مرحله بعد
                </Button>
            </div>
        );
    }
}

export default PersonalInfo;
