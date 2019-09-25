import React from 'react';
import "./PersonalInfo.css";
import Button from "../UI/Button/Button";

const PersonalInfo = (props) => {

    const createSelectItems = () => {
        let items = [];
        for (let i = 1350; i <= 1398; i++) {
            items.push(<option key={i} value={i}>{i}</option>);
        }
        return items;
    };

    const clickHandler = () => {

    };

    return (
        <div id="PersonalInfo">
            <p>اطلاعات فردی خودتونو وارد کنید</p>
            <form id="form-wrapper">
                    <input placeholder="نام و نام خانوادگی" autoComplete="off" type="text" name="fullName" required/><br />
                    <input placeholder="عنوان شغلی" type="text" name="jobTitle" /><br />
                    <label>جنسیت: </label>
                    <select >
                        <option>مرد</option>
                        <option>زن</option>

                    </select><br />
                    <label id="yearLabel">سال تولد: </label>
                    <select>
                        {createSelectItems()}
                    </select><br />
            </form>
            <Button bgColor="#0099ff" color="white" clicked={clickHandler}>
                مرحله بعد
            </Button>
        </div>
    );
};

export default PersonalInfo;
