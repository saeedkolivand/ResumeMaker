import React from 'react';
import "./PersonalInfo.css";
import Button from "../UI/Button/Button";

const PersonalInfo = () => {

    const createSelectItems = () => {
        let items = [];
        for (let i = 1350; i <= 1398; i++) {
            items.push(<option key={i} value={i}>{i}</option>);
        }
        return items;
    }

    return (
        <div id="PersonalInfo">
            <p>اطلاعات فردی خودتونو وارد کنید</p>
            <form id="form-wrapper">
                <input placeholder="نام و نام خانوادگی" autoComplete="off" type="text" name="fname" />
                <input placeholder="عنوان شغلی" type="text" name="jobTitle" /><br />
                <label>جنسیت: </label>
                <select >
                    <option>مرد</option>
                    <option>زن</option>

                </select>
                <label id="yearLabel">سال تولد: </label>
                <select>
                    {createSelectItems()}
                </select>
            </form>
        </div>
    );
};

export default PersonalInfo;
