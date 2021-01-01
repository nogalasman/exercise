import React from 'react';
import ProgressBar from './ProgressBar'
import './ProgressBars.css'

const pbData = [
    { id: 1, bgcolor: "#6a1b9a", txt: "General", completed: 60 },
    { id: 2, bgcolor: "#00695c", txt: "Uploading", completed: 30 },
    { id: 3, bgcolor: "#ef6c00", txt: "Tasks Status", completed: 53 },
  ];

class ProgressBars extends React.Component {
    constructor() {
        super();
        this.state = {
            data : pbData,
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            let newData= this.state.data.map(element => {
                const newCompleted = element.completed+(Math.floor(Math.random() * 5) + 1);
                element.completed = newCompleted > 100 ? 100 : newCompleted;
                return element;
            });
            this.setState({ data : newData });
            }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        const sum = this.state.data.map(element => element.completed).reduce((a, b) => a + b, 0);
        if ((sum / this.state.data.length) >= 100) {
            clearInterval(this.myInterval);
        } 
    }
    
    render() {
        const dataView = this.state.data.map((item) => (
            <ProgressBar bgColor={item.bgcolor} txt={item.txt} completed={item.completed} key={item.id}></ProgressBar>
        ));

        return(
            <div className="c-progressbars">
                {dataView}
            </div>
        ); 
    }
    
}

export default ProgressBars;