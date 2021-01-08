const wraperStyle = {
    padding: "10px 5px 10px 5px",
    margin: "10px 5px",
    backgroundColor: "#ee9595",
    borderRadius: "10px"
}

const headerElementStyle = {
    margin: 0
}

function TimeTableSubject(props) {
    return (
        <div style={wraperStyle}>
            <h4 style={headerElementStyle}>{props.data.name}</h4>
            <p>Nhóm: {props.data.group}</p>
            <p>{props.data.room}</p>
            <p>Tiết: {props.data.period}</p>
        </div>
    );
}

export default TimeTableSubject;