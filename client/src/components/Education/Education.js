import React, { Component } from 'react';
import './Education.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from '../UI/Select/Select';

class Education extends Component {

    state = {
        education: [],
        outAnim: false
    };

    componentDidMount() {
        console.log(this.props.location);

    }

    degreeList = () => [
        'دیپلم',
        'کاردانی',
        'کارشناسی',
        'کارشناسی ارشد',
        'دکتری'
    ];

    monthList = () => [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند'
    ];

    yearList = () => {
        let years = [];
        for (let i = 1398; i >= 1350; i--) {
            years.push(i);
        }
        return years;
    };

    currentEducation = { degree: '', major:'', university: '', month: '', year: '' };

    handleDegree = (event) => {
        this.currentEducation.degree = event.target.value;
    };

    handleMajor = (event) => {
        this.currentEducation.major = event.target.value;
    };

    handleUniversity = (event) => {
        this.currentEducation.university = event.target.value;
    };

    handleMonth = (event) => {
        this.currentEducation.month = event.target.value;
    };

    handleYear = (event) => {
        this.currentEducation.year = event.target.value;
    };

    handleAddEducation = () => {
        let oldEducation = [...this.state.education];
        if (this.currentEducation.degree.length && this.currentEducation.major.length) {
            oldEducation.push({
                degree: this.currentEducation.degree,
                major: this.currentEducation.major,
                university: this.currentEducation.university,
                month: this.currentEducation.month,
                year: this.currentEducation.year
            });
            this.setState({ education: oldEducation });
            this.currentEducation = {
                degree: '',
                major:'',
                university: '',
                fromMonth: '',
                fromYear:''
            };
            document.getElementById('degreeSelector').value = '';
            document.getElementById('majorInput').value = '';
            document.getElementById('degreeSelector').focus();
            document.getElementById('universityInput').value = '';
            document.getElementById('monthSelector').value = '-';
            document.getElementById('yearSelector').value = '-';
        } else {
            const degreeSelector = document.getElementById('degreeSelector');
            const majorInput = document.getElementById('majorInput');
            const borderStyle = "1px solid red";
            if (!degreeSelector.value.length && !majorInput.value.length) {
                degreeSelector.style.border = borderStyle;
                majorInput.style.border = borderStyle;
            }
        }
    };

    handleDeleteEducation = (index) => {

        let oldEducation = [...this.state.education];

        oldEducation.splice(index, 1);
        this.setState({
            education: [...oldEducation]
        })
    };

    handleSubmit = () => {
        this.setState({
            outAnim: true
        }, () => setTimeout(() => {
            this.props.history.push({
                pathname: '/contact',
                state: {
                    ...this.props.location.state,
                    education: this.state.education
                }
            });
        }, 300));
    };

    educationContainerRenderer = () => {
        let element = null;
        if (this.state.education.length) {
            element = this.state.education.map((education, i) => {
                return (
                    <div className="addedEducationBox" key={i}>
                        <p className="addedEducationBoxOutputs"><label> مدرک:</label>{education.degree}</p>
                        <p className="addedEducationBoxOutputs"><label> رشته:</label>{education.major}</p><br/>
                        <p className="addedEducationBoxOutputs"><label> نام محل اخذ مدرک:</label>{education.university}</p>
                        <p className="addedEducationBoxOutputs"><label> تاریخ اخذ مدرک:</label>{education.month} - {education.year}</p>
                        <div className="deleteIcon" onClick={() => this.handleDeleteEducation(i)} />
                    </div>
                );
            })

        }
        return element;
    };

    render() {
        let educationStyle = {};
        if (this.state.outAnim) {
            educationStyle = {
                transform: 'translateX(500px)',
                opacity: 0
            }
        }
        return (
            <div id="education" style={educationStyle}>
                <p>سوابق تحصیلی</p>
                <div id="formWrapper">
                    <label>مدرک:</label>
                    <Select 
                        id="degreeSelector" 
                        changed={this.handleDegree} 
                        options={this.degreeList()} />
                    <label>رشته:</label>
                    <Input 
                        id="majorInput" 
                        changed={this.handleMajor} 
                        value={this.state.education}
                        placeholder="نام رشته تحصیلی" 
                        autocomplete="off" 
                        type="text" 
                        name="majorInput" /><br />
                    <label>محل تحصیل:</label><Input id="universityInput" changed={this.handleUniversity} value={this.state.education}
                                                placeholder="نام محل تحصیل" autocomplete="off" type="text" name="universityInput" /><br />
                    <label>ماه اخذ مدرک:</label><Select id="monthSelector" changed={this.handleMonth} options={this.monthList()} />
                    <label>سال اخذ مدرک:</label><Select id="yearSelector" changed={this.handleYear} options={this.yearList()} />
                    <Button 
                        id="addEducationBtn"
                        clicked={this.handleAddEducation} 
                        bgColor="#ff6666" 
                        color="white">+</Button><br/>
                    {this.educationContainerRenderer()}
                </div>
                <Button bgColor="#0099ff" color="white" clicked={this.handleSubmit}>
                    مرحله بعد
                </Button>
            </div>
        );
    }
}

export default Education;