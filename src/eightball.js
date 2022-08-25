import React, {useState} from "react";

const Eightball = (props) => {
    let rand = Math.floor(Math.random() * props.answers.length);
    const [eightQ, eightA] = useState("Think of a Question");
    const [qColor, aAnswer] = useState({backgroundColor: "black", color: "white"});
    return (
        <div>
            <button style={qColor} onClick={() => {
                eightA(props.answers[rand].msg);
                aAnswer({backgroundColor: props.answers[rand].color, color: "white"});
            }}>
                {eightQ}
            </button>
        </div>
    );
}

export default Eightball;