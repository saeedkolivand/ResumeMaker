import React, {Component} from 'react';
import "./PersonalInfo.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

class PersonalInfo extends Component {

    personalInfoData = {};

    createSelectItems = () => {
        let items = [];
        for (let i = 1350; i <= 1398; i++) {
            items.push(i);
        }
        return items;
    };

    clickHandler = () => {
        if (this.personalInfoData.fullName && this.personalInfoData.jobTitle) {
            this.props.match.params.personalInfo = this.personalInfoData;
            this.props.history.push("/skills");
        }
    };

    handleInputChange = (event) => {
        if (event.target.name === "fullName") {
            this.personalInfoData.fullName = event.target.value;
        } else if (event.target.name === "jobTitle") {
            this.personalInfoData.jobTitle = event.target.value;
        } else if (event.target.id === "sex") {
            this.personalInfoData.sex = event.target.value;
        } else if (event.target.id === "birthYear") {
            this.personalInfoData.birthYear = event.target.value;
        }
    };

    render() {

        return (
            <div id="PersonalInfo">
                <p>اطلاعات فردی خودتونو وارد کنید</p>
                <form id="form-wrapper">
                    <Input changed={this.handleInputChange} placeholder="نام و نام خانوادگی" autocomplete="off"
                           type="text" name="fullName"/><br/>
                    <Input changed={this.handleInputChange} autocomplete="off" placeholder="عنوان شغلی" type="text" name="jobTitle"/><br/>
                    <label>جنسیت: </label>
                    <Select id="sex" changed={this.handleInputChange} options={['مرد', 'زن']} /><br/>
                    <label id="yearLabel">سال تولد: </label>
                    <Select id="birthYear" changed={this.handleInputChange} options={this.createSelectItems()} /> <br/>
                </form>
                <Button bgColor="#0099ff" color="white" clicked={this.clickHandler}>
                    مرحله بعد
                </Button>
            </div>
        );
    }
}

export default PersonalInfo;
