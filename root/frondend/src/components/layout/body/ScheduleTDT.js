import React, { Component } from 'react';

class ScheduleTDT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({tokenValue: event.target.value});
    }

    handleSubmit() {
        let prom = fetch(`https://tn02j.herokuapp.com/api/timeTable?token=${this.state.tokenValue}&hocKyID=106`, {mode: 'cors'});
        prom.then(res => console.log(res));
    }
    
    render() {
        return (
            <div className='ScheduleTDT'>
                <input type='text' placeholder='Enter Token' onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Go</button>
            </div>
        );
    }
}

export default ScheduleTDT;
