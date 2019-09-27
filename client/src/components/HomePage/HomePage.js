import React, { Component } from 'react';
import './HomePage.css';
import Button from "../UI/Button/Button";


class HomePage extends Component {
    state = {
        transFlag: false
    };
    componentWillUnmount() {

    }

    render() {
        const startClickHandler = async (event) => {
            console.log('startClickHandler', this.state);
            await this.setState({
                transFlag: true
            }
            );
            console.log('startClickHandler', this.state);
            setTimeout(() => {
                this.props.history.push("/personalinfo");

            }, 200);
        };
        return (
            <div id="HomePage" style={this.state.transFlag ? { transform: "translateX(500px)", opacity: 0 } : null}>
                <p>رزومه خودتو چند ثانیه ای بساز</p>
                <Button bgColor="#0099ff" color="white" clicked={startClickHandler}>
                    شروع
                </Button>
            </div>
        )
    }

}


export default HomePage;