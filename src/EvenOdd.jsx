import React, { Component } from "react";

/*function EvenOdd(props){

    let num = props.num;
    let message = (num % 2 === 0) ? "Even Number" : "Odd Number";

    return(
        <div>
            <h2>Even Odd Using Ternary Operator</h2>
            <p>{message}</p>
        </div>
    );
}*/

class EvenOdd extends Component{

    render(){

        let { num } = this.props;
        let message = (num % 2 === 0) ? "Even Number" : "Odd Number";

        return (
            <div>
                <h2>Even Odd Using Ternary OPerator</h2>
                <p>{message}</p>
            </div>
        );
    }
}

export default EvenOdd;