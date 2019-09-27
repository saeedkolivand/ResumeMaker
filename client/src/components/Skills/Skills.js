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
    ]

    componentDidMount() {
        console.log(this.props);
        
    }

    currentSkill = { skill: '', level: '' }
    handleAddNewSkillText = (event) => {
        this.currentSkill.skill = event.target.value;
        console.log(this.currentSkill);
    };

    handleLevelSelector = (e) => {
        this.currentSkill.level = e.target.value;
        console.log(this.currentSkill);

    }

    handleAddSkill = (event) => {
        this.setState((prevState) => {
            if (prevState.skills.length === 0) {
                return {
                    skills: [this.currentSkill]
                }
            } else {
                return {
                    skills: [
                        ...prevState.skills,
                        this.currentSkill
                    ]
                }
            }
        });
        document.getElementById('skillInput').value ='';
        document.getElementById('skillInput').focus();
        document.getElementById('levelSelector').value = '-';
    };



    render() {
        return (
            <div id="skills">
                <p>مهارت ها</p>
                <div id="formWrapper">
                    <Input id="skillInput" changed={this.handleAddNewSkillText} value={this.state.skill} placeholder="مهارت خود را وارد کنید" autocomplete="off" type="text" name="skills" />
                    <Select id="levelSelector" changed={this.handleLevelSelector} options={this.levels} />
                    <Button clicked={this.handleAddSkill} bgColor="#ff6666" color="white">
                        +
                    </Button>
                </div>
            </div>
        );
    }
}

export default Skills;