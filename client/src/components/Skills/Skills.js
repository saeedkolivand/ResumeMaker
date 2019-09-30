import React, { Component } from 'react';
import './Skills.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from '../UI/Select/Select';

class Skills extends Component {



    state = {
        skills: [],
        outAnim: false
    };

    levels = [
        'تازه کار',
        'نیمه ماهر',
        'ماهر',
        'متخصص'
    ];

    currentSkill = { skillText: '', level: '' };
    handleAddNewSkillText = (event) => {
        this.currentSkill.skillText = event.target.value;
        //console.log(this.currentSkill);
    };


    handleLevelSelector = (e) => {
        this.currentSkill.level = e.target.value;
        //console.log(this.currentSkill);

    };

    handleAddSkill = (event) => {
        let oldSkills = [...this.state.skills];
        if (this.currentSkill.level.length && this.currentSkill.skillText.length) {
            oldSkills.push({ skillText: this.currentSkill.skillText, level: this.currentSkill.level });
            this.setState({ skills: oldSkills });
            this.currentSkill = { level: '', skillText: '' };
            document.getElementById('skillInput').value = '';
            document.getElementById('skillInput').focus();
            document.getElementById('levelSelector').value = '-';
        } else {
            const skillInput = document.getElementById('skillInput');
            const borderStyle = "1px solid red";
            if (!skillInput.value.length) {
                skillInput.style.border = borderStyle;
            }
        }
    };

    handleDeleteSkill = (index) => {

        let oldSkills = [...this.state.skills];

        oldSkills.splice(index, 1);
        this.setState({
            skills: [...oldSkills]
        })
    };

    handleSubmit = () => {

        this.setState({
            outAnim: true
        }, () => setTimeout(() => {
            this.props.history.push({
                pathname: '/workexperience',
                state: {
                    ...this.props.location.state,
                    Skills: this.state.skills
                }
            });
        }, 300));

    };

    skillContainerRenderer = () => {
        let element = null;
        if (this.state.skills.length) {
            element = this.state.skills.map((skill, i) => {
                return (
                    <div className="addedSkillBox" key={i}>
                        <div className="addedSkillText"><br/>
                            {skill.skillText} <br/>
                            {skill.level}
                        </div>
                        <div className="deleteIcon" onClick={() => this.handleDeleteSkill(i)} />
                    </div>
                );
            })

        }
        return element;
    };

    render() {
        let skillStyle= {};
        if (this.state.outAnim) {
            skillStyle = {
                transform: 'translateX(500px)',
                opacity: 0
            }
        }
        return (
            <div id="skills" style={skillStyle}>
                <p>مهارت ها</p>
                <div id="formWrapper">
                    <Input id="skillInput" changed={this.handleAddNewSkillText} value={this.state.skills}
                        placeholder="مهارت خود را وارد کنید" autocomplete="off" type="text" name="skills" />
                    <Select id="levelSelector" changed={this.handleLevelSelector} options={this.levels} />
                    <Button clicked={this.handleAddSkill} bgColor="#ff6666" color="white">+</Button><br/>
                    {this.skillContainerRenderer()}
                </div>
                <Button bgColor="#0099ff" color="white" clicked={this.handleSubmit}>
                    مرحله بعد
                </Button>
            </div>
        );
    }
}

export default Skills;