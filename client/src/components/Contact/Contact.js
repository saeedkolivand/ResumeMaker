import React, { Component } from 'react';
import './Contact.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

class Contact extends Component {

    state = {
        outAnim: false
    };

    componentDidMount() {
        console.log(this.props.location);

    }

    currentContactInfo = { phoneNumber: '', email: '', linkedIn:'', github: '' };
    handleAddPhoneNumber = (event) => {
        this.currentContactInfo.phoneNumber = event.target.value;
    };

    handleAddEmail = (event) => {
        this.currentContactInfo.email = event.target.value;
    };

    handleAddLinkedIn = (event) => {
        this.currentContactInfo.linkedIn = event.target.value;
    };

    handleAddGithub = (event) => {
        this.currentContactInfo.github = event.target.value;
    };

    handleSubmit = () => {
        const contact = this.currentContactInfo;
        if (this.currentContactInfo.phoneNumber.length && this.currentContactInfo.email.length) {
            this.setState({
                outAnim: true
            }, () => setTimeout(() => {
                this.props.history.push({
                    pathname: '/resumePreview',
                    state: {
                        ...this.props.location.state,
                        contactInfo: contact
                    }
                });
            }, 300));
        this.currentContactInfo = {phoneNumber: null, email: '', linkedIn: '', github: ''};
        document.getElementById('phoneNumberInput').value = '';
        document.getElementById('phoneNumberInput').focus();
        document.getElementById('emailInput').value = '';
        document.getElementById('emailInput').focus();
        } else {
            const phoneNumberInput = document.getElementById('phoneNumberInput');
            const emailInput = document.getElementById('emailInput');
            const borderStyle = "1px solid red";
            if (!phoneNumberInput.value.length && !emailInput.value.length) {
                phoneNumberInput.style.border = borderStyle;
                emailInput.style.border = borderStyle;
            }else if (!emailInput.value.length){
                emailInput.style.border = borderStyle;
            }else if(!phoneNumberInput.value.length){
                phoneNumberInput.style.border = borderStyle;
            }
        }
    };

    render() {
        let contactStyle = {};
        if (this.state.outAnim) {
            contactStyle = {
                transform: 'translateX(500px)',
                opacity: 0
            }
        }
        return (
            <div id="contact" style={contactStyle}>
                <p>اطلاعات تماس</p>
                <div id="formWrapper">
                    <Input id="phoneNumberInput" changed={this.handleAddPhoneNumber} value={this.state.contactInfo}
                       placeholder="شماره همراه" autocomplete="on" type="number" name="phoneNumber" /> <br />
                    <Input id="emailInput" changed={this.handleAddEmail} value={this.state.contactInfo}
                       placeholder="ایمیل" autocomplete="on" type="email" name="Email" /> <br />
                    <Input id="linkedInInput" changed={this.handleAddLinkedIn} value={this.state.contactInfo}
                       placeholder="آدرس لینکدین" autocomplete="off" type="link" name="linkedIn" /> <br />
                    <Input id="githubInput" changed={this.handleAddGithub} value={this.state.contactInfo}
                       placeholder="آدرس گیت هاب" autocomplete="off" type="link" name="github" />
                </div>
                <Button bgColor="#0099ff" color="white" clicked={this.handleSubmit}>
                    مرحله بعد
                </Button>
            </div>
        );
    }
}

export default Contact;