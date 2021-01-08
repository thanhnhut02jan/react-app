import React from 'react';

import TimeTableDayCard from './TimeTableDayCard';

const startDate = new Date('12/28/2020');
const endDate = new Date('08/08/2021');

const wraperStyle = {
    backgroundColor: "while",
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
    overflow: "auto"
}

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           date: new Date(),
           weekTimeTable: [],
           haveData: false
        }
    }

    componentDidMount() {
        this.setState({ weekTimeTable: this.getWeekTimeTable(this.state.date)}, () => {
            this.setState({haveData: true});
        });
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

    getWeekTimeTable = (nowDate) => {
        let res = [];
        while (res.length < 7) res.push([]);

        let { subjectList } = this.props;
        let weekNum = Math.floor((nowDate - startDate) / (1000*60*60*24*7));
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

    increaseDay = () => {
        let newDate = this.state.date;
        newDate.setDate(newDate.getDate() + 1);
        
        if ((endDate - newDate) >= 0) {
            this.setState({
                date: newDate,
                weekTimeTable: this.getWeekTimeTable(newDate),
            });
        }
    }

    decreaseDay = () => {
        let newDate = new Date(this.state.date.getTime());
        newDate.setDate(newDate.getDate() - 1);

        if ((newDate - startDate) >= 0) {
            this.setState({
                date: newDate,
                weekTimeTable: this.getWeekTimeTable(newDate),
            });
        }
    }

    render() {
        let { weekTimeTable, date } = this.state;
        return (
            <div>
                <button onClick={this.decreaseDay}>-</button>
                <span>{date.toLocaleDateString()}</span>
                <button onClick={this.increaseDay}>+</button>
                {this.state.haveData && 
                    <div style={wraperStyle}>
                        <TimeTableDayCard dayName='Monday' daySubjects={weekTimeTable[0]} isToday={date.getDay() === 1}/>
                        <TimeTableDayCard dayName='Tuesday' daySubjects={weekTimeTable[1]} isToday={date.getDay() === 2}/>
                        <TimeTableDayCard dayName='Wednesday' daySubjects={weekTimeTable[2]} isToday={date.getDay() === 3}/>
                        <TimeTableDayCard dayName='Thursday' daySubjects={weekTimeTable[3]} isToday={date.getDay() === 4}/>
                        <TimeTableDayCard dayName='Friday' daySubjects={weekTimeTable[4]} isToday={date.getDay() === 5}/>
                        <TimeTableDayCard dayName='Saturday' daySubjects={weekTimeTable[5]} isToday={date.getDay() === 6}/>
                        <TimeTableDayCard dayName='Sunday' daySubjects={weekTimeTable[6]} isToday={date.getDay() === 0}/>
                    </div>
                }
            </div> 
        );
    }

}

export default TimeTable;