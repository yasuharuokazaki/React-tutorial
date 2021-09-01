import React from "react"
import TempInput from "./tempinput"
import "./convetor";
import { tyrConvert,toCelsius,toFahrenheit } from "./convetor";
import BoilingVerdict from "./boil";



class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
        this.state = {temp:"",scale:"c"};
    }

    handleCelsiusChange(temp){
        this.setState({scale:"c",temp});
    }

    handleFahrenheitChange(temp){
        this.setState({scale:"f",temp});
    }

    render(){
        const scale = this.state.scale;
        const temp = this.state.temp;
        const celsius = scale === "f"? tyrConvert(temp,toCelsius):temp;
        const fahrenheit = scale === "c"? tyrConvert(temp,toFahrenheit):temp;
        console.log(this.state);
        return(
            
        <div>
           <TempInput
                scale="c"
                temp={celsius}
                onTempChange={this.handleCelsiusChange}/>
           <TempInput
                scale="f"
                temp={fahrenheit}
                onTempChange={this.handleFahrenheitChange}/>
            <BoilingVerdict/>
        </div>
        )
    }
}
  

export default Calculator;