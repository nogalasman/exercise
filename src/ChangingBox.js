import React from 'react';
import './ChangingBox.css';

class ChangingBox extends React.Component{

    constructor(){
        super();
        this.state = {
            color: this.getRandomColor(),
            borderRadius: '0',
            counter: 1,
        };
    };

    r() { return Math.floor(Math.random() * 255) };

    getRandomColor = () => {
        return 'rgb(' + this.r() + "," + this.r() + "," + this.r() + ')';
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const newColor = this.getRandomColor();
            this.setState({color: newColor,  borderRadius: (this.state.counter >= 5 ? '50' : '0'),counter: this.state.counter + 1});
        }, 500);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.counter === 10) {
            clearInterval(this.myInterval);
        } 
    }

    render() {
        const {color, borderRadius} = this.state;
        const myStyle = {backgroundColor: color, borderRadius: borderRadius+'%'};
        return(
            <>
                <div className="box" style={myStyle}></div>
            </>
        );
    }
}

export default ChangingBox;