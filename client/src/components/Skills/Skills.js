import React, {Component} from 'react';
import './Skills.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Select from '../UI/Select/Select';

class Skills extends Component {

    state = {
        skills: []
    };

    levels = [
        {id: 1, value: 25, text: 'تازه کار'},
        {id: 2, value: 50, text: 'نیمه ماهر'},
        {id: 3, value: 75, text: 'ماهر'},
        {id: 4, value: 100, text: 'متخصص'}
    ];

    componentDidMount() {
        console.log(this.props);

    }

    currentSkill = {skill: '', level: ''};
    handleAddNewSkillText = (event) => {
        this.currentSkill.skill = event.target.value;
        console.log(this.currentSkill);
    };

    findLevel = id => this.levels.filter(e => e.id === parseInt(id))[0];

    handleLevelSelector = (e) => {
        this.currentSkill.level = e.target.value;
        console.log(this.currentSkill);

    };

    handleAddSkill = (event) => {
        let oldSkills = [...this.state.skills];
        console.log(oldSkills === this.state.skills);
        if (this.currentSkill.level.length && this.currentSkill.skill.length) {
            oldSkills.push({skill: this.currentSkill.skill, level: this.currentSkill.level});
            this.setState({skills: oldSkills});
            this.currentSkill = {level: [], skill: []};
            document.getElementById('skillInput').value = '';
            document.getElementById('skillInput').focus();
            document.getElementById('levelSelector').value = '-';
        }
    };

    handleDeleteSkill = (index) => {
        let deleteSkill = [...this.state.skills];

        this.setState({
            skills: deleteSkill.splice(index,1)
        })
    };

    handleSubmit = () => {

    };


    render() {
        const {skills} = this.state;
        return (
            <div id="skills">
                <p>مهارت ها</p>
                <div id="formWrapper">
                    <Input id="skillInput" changed={this.handleAddNewSkillText} value={this.state.skill}
                           placeholder="مهارت خود را وارد کنید" autocomplete="off" type="text" name="skills"/>
                    <Select id="levelSelector" changed={this.handleLevelSelector} options={this.levels}/>
                    <Button clicked={this.handleAddSkill} bgColor="#ff6666" color="white">+</Button>
                    {skills.length && this.state.skills.map((skill, i) =>
                        <div key={i} className="addedSkillBox">
                            <span>{skill.skill}</span><br/>
                            <progress max="100" value={this.findLevel(skill.level).value}>
                                {this.findLevel(skill.level).value}
                            </progress>
                            <span onClick={() => this.handleDeleteSkill(i)}>*</span>
                        </div>
                    )}
                </div>
                <Button bgColor="#0099ff" color="white" clicked={this.handleSubmit}>
                    مرحله بعد
                </Button>
            </div>
        );
    }
}

export default Skills;