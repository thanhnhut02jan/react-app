import TimeTableSubject from './TimeTableSubject'

const dayCardStyle = {
    flexGrow: 1,
    flexShrink: 1,
    textAlign: 'center',
    border: "1px #555 solid",
    margin: "0 5px",
    flexBasis: "0px",
    minHeight: "300px",
    color: '#333'
}

const headerDayNameStyle = {
    margin: 0,
    padding: "20px 40px",
    backgroundColor: "pink"
}

function TimeTableDayCard (props) {
    let { dayName, daySubjects } = props;
    let res = 
        <div style={dayCardStyle}>
            <h3 style={headerDayNameStyle}>{dayName}</h3>
            {daySubjects.length > 0 && daySubjects.map(item => <TimeTableSubject data={item}/>)}
        </div>
    ;
    return res;
}

export default TimeTableDayCard;