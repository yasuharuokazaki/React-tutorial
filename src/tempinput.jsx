import React from "react";



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
       
        this.props.onTempChange(e.target.value);
    }

    render(){
        const temp = this.props.temp;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>{scaleNames[scale]}で水温を入れてね：</legend>
                <input
                    value={temp}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

export default TempInput;