import React, { Component } from 'react';
import './Skills.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from '../UI/Select/Select';

class Skills extends Component {

    state = {
        skills: []
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
        this.props.history.push({
            pathname: '/workexperience',
            state: {
                ...this.props.location.state,
                Skills : this.state.skills
            }
        });
    }


    setLevelValue = (levelText) => {
        switch (levelText) {
            case this.levels[0]:
                return 25;
            case this.levels[1]:
                return 50;
            case this.levels[2]:
                return 75;
            case this.levels[3]:
                return 100;
            default:
                return undefined;
        }
    }

    skillContainerRenderer = () => {
        let element = null;
        if (this.state.skills.length) {
            element = this.state.skills.map((skill, i) => {
                return (<div className="addedSkillBox" key={i}>
                    <span>{skill.skillText}</span><br />
                    <progress max="100" value={this.setLevelValue(skill.level)}>
                        {this.setLevelValue(skill.level)}
                    </progress>
                    <span onClick={() => this.handleDeleteSkill(i)}>*</span>
                </div>);
            })

        }
        return element;
    }

    render() {
        return (
            <div id="skills">
                <p>مهارت ها</p>
                <div id="formWrapper">
                    <Input id="skillInput" changed={this.handleAddNewSkillText} value={this.state.skill}
                        placeholder="مهارت خود را وارد کنید" autocomplete="off" type="text" name="skills" />
                    <Select id="levelSelector" changed={this.handleLevelSelector} options={this.levels} />
                    <Button clicked={this.handleAddSkill} bgColor="#ff6666" color="white">+</Button>
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