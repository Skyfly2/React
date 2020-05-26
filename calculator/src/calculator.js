import React from 'react';


function CalcButton(props){
    if(props.type === 'o'){
        return(
            <button className="CalcButtonO" onClick={props.onClick}>{props.value}</button>
        );
    }
    return(
        <button className="CalcButton" onClick={props.onClick}>{props.value}</button>
    );
}

export default CalcButton;