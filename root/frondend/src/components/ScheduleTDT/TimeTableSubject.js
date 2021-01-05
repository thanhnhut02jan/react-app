const wraperStyle = {
    marginTop: "10px",
    padding: "0px 5px",
    borderBottom: "1px solid #333"
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