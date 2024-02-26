import React, { Component } from "react";

class Multiple extends Component{
    // constructor(props){
    //     super();
    // }

    render(){
        console.log("value", this.props)


        return (
            <>
            <div>
                <h3>multiple : {this.props.passedValue*2}</h3>
            </div>
            </>
        )
    }
}

export default Multiple;