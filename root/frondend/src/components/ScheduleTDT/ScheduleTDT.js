import React from 'react';

import TimeTable from './TimeTable';

class ScheduleTDT extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
            token: '',
            hocKyID: '',
            data: {},
            haveData: false
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }); 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ isFetching: true })

        const corsAnwUrl = 'http://cors-anywhere.herokuapp.com/';
        let apiUrl = `http://tn02j.herokuapp.com/api/timeTable?token=${this.state.token}&hocKyID=${this.state.hocKyID}`;
        let callApi = fetch(corsAnwUrl + apiUrl, { 
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
        });
        callApi
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({ 
                data: res,
                isFetching: false,
                haveData: true
            });
        })
        .catch(() => {
            this.setState({ isFetching: false })
            alert('Token không hợp lệ!');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete='off'>
                    <label>
                        Token:
                        <input type='text' name='token' onChange={this.handleChange}></input>
                    </label>
                    <label>
                        hocKyID:
                        <input type='text' name='hocKyID' onChange={this.handleChange}></input>
                    </label>
                    <button type='submit' disabled={this.state.isFetching}>Submit</button>
                </form>
                {this.state.haveData && <TimeTable subjectList={this.state.data.list} />}
            </div>
        );
    }
}

export default ScheduleTDT;