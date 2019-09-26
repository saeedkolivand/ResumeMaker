import React, {Component} from 'react';
import './Skills.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

class Skills extends Component {

    state = {
        skills: [
            {id: 1, skill: ''}
        ]
    };

    handleAddNewSkillText = (event) => {
        this.setState({
            skills: [
                {skill: event.target.value}
            ]
        })
    };

    handleAddSkill = (event) => {
        event.preventDefault();
        this.setState({
            skills: {
                skill: ''
            }
        });
        console.log(this.state)
    };

    render() {
        return (
            <div id="skills">
                <p>مهارت ها</p>
                <form id="form-wrapper">
                    <div className="addNewSkillBox">
                        <Input changed={this.handleAddNewSkillText} value={this.state.skill} placeholder="مهارت خود را وارد کنید" autocomplete="off" type="text" name="skills" />
                        <Button clicked={this.handleAddSkill} bgColor="#ff6666" color="white">
                            +
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Skills;