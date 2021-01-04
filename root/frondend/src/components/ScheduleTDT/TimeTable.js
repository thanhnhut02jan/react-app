import React from 'react';

const startDate = new Date('12/28/2020');
const endDate = new Date('08/08/2021');

const wraperStyle = {
    backgroundColor: "while",
    display: "flex",
    justifyContent: "space-between"
}

const rowStyle = {
    flexGrow: 1,
    flexShrink: 1,
    textAlign: 'center',
    border: "1px #555 solid",
    borderRadius: "5px",
    padding: "10px 10px",
    margin: "0 5px",
    flexBasis: "0px"
}

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           date: new Date(),
           weekTimeTable: [],
        }
    }

    getDayTimeTable = (index) => {
        let { weekTimeTable } = this.state;
        if (weekTimeTable[index]) {
            return weekTimeTable[index].map(item => {
                return (<p>
                    {item.name}
                </p>)
            });
        }
    }

    getWeekTimeTable = () => {
        let res = [];
        while (res.length < 7) res.push([]);

        let { subjectList } = this.props;
        let weekNum = Math.floor((this.state.date - startDate) / (1000*60*60*24*7));

        subjectList.forEach(subject => {
            subject.scheduleList.forEach(schedule => {
                if (schedule.studyWeek.charAt(weekNum) !== '-') {
                    let tmp = {
                        name: subject.subjectName,
                        group: subject.group,
                        room: schedule.room,
                        period: schedule.period
                    }

                    res[schedule.weekDay].push(tmp);
                }
            })
        });

        return res;
    }

    componentDidMount() {
        this.setState({ weekTimeTable: this.getWeekTimeTable()});
    }

    increaseDay = () => {
        let newDate = this.state.date;
        newDate.setDate(newDate.getDate() + 7);
        this.setState({
            date: newDate,
            weekTimeTable: this.getWeekTimeTable(),
        });
    }

    render() {
        return (
            <div>
                <span>{this.state.date.toLocaleDateString()}</span>
                <button onClick={this.increaseDay}>+</button>
                <div style={wraperStyle}>
                <div style={rowStyle}>
                    <span>Monday</span>
                    {this.getDayTimeTable(0)}
                </div>
                <div style={rowStyle}>
                    <span>Tueday</span>
                    {this.getDayTimeTable(1)}
                </div>
                <div style={rowStyle}>
                    <span>Wednesday</span>
                    {this.getDayTimeTable(2)}
                </div>
                <div style={rowStyle}>
                    <span>Thursday</span>
                    {this.getDayTimeTable(3)}
                </div>
                <div style={rowStyle}>
                    <span>Friday</span>
                    {this.getDayTimeTable(4)}
                </div>
                <div style={rowStyle}>
                    <span>Saturday</span>
                    {this.getDayTimeTable(5)}
                </div>
                <div style={rowStyle}>
                    <span>Sunday</span>
                    {this.getDayTimeTable(6)}
                </div>
                </div>
            </div> 
        );
    }

}

export default TimeTable;