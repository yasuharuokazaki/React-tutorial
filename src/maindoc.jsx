import React from "react"

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>水は沸騰しました。</p>;
    }
     
    return <p>水は沸騰していません。</p>;
}

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temp:""};
    }

    handleChange(e){
        this.setState({temp:e.target.value});
    }

    render(){
        const temp = this.state.temp;
        return(
            <fieldset>
                <legend>
                    摂氏で温度を入力してね！
                </legend>
                <input
                    value={temp}
                    onChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temp)}/>
            </fieldset>

        );
    }
}

    

export default Calculator;