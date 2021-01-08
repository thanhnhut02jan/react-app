import TimeTableSubject from './TimeTableSubject'

const headerDayNameStyle = {
    margin: 0,
    padding: "20px 40px",
    backgroundColor: "#74c7b8"
}

// const dayCardStyle = {
//     flexGrow: 1,
//     flexShrink: 1,
//     textAlign: 'center',
//     margin: "0 5px",
//     flexBasis: "0px",
//     color: '#333',
//     border: "1px #555 solid",
//     borderBottom: 0
// }

// const toDayCardStyle = {
//     flexGrow: 1,
//     flexShrink: 1,
//     textAlign: 'center',
//     margin: "0 5px",
//     flexBasis: "0px",
//     color: '#333',
//     border: "10px #555 solid",
//     borderBottom: 0
// }

function TimeTableDayCard (props) {
    let { dayName, daySubjects, isToday } = props;

    let res = 
        <div className={isToday === true ? "dayCardToday" : "dayCard"}>
            <div>
                <h3 style={headerDayNameStyle}>{dayName}</h3>
                {daySubjects.length > 0 && daySubjects.map(item => <TimeTableSubject data={item}/>)}
            </div>
        </div>
    ;
    return res;
}

export default TimeTableDayCard;