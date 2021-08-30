import React from "react";
import BoilingVerdict from "./boil";
const scaleNames = {
    c:"Celcius",
    f:"Fahrenheit"
};

class TempInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state ={temp:""};
    }

    handleChange(e){
        this.setState({temp:e.target.value});
    }

    render(){
        const temp = this.state.temp;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>{scaleNames[scale]}で水温を入れてね：</legend>
                <input
                    value={temp}
                    onChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temp)}/>
            </fieldset>
        );
    }
}

export default TempInput;