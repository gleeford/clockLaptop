import React from 'react';
import ReacDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {time : new Date()};
    };


componentDidMount(){
    this.timer = setInterval(
        () => this.tick(), 
        1000
    );
}

componentWillUnmount(){
    clearInterval(this.timer);
}

tick(){
    this.setState({
        time : new Date(),
    });
}

render(){
     return(
        <div>
            <h1>CLOCK</h1>
            <h3>{this.state.time.toLocaleTimeString()} </h3>
        </div>
     );
}
}

export default Clock;