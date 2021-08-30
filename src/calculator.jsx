import React from "react"
import TempInput from "./tempinput"

class Calculator extends React.Component {
    

    render(){
        
        return(
        <div>
           <TempInput scale="c"/>
           <TempInput scale="f"/>
        </div>
        )
    }
}
  

export default Calculator;