import React from "react";

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>水は沸騰しました。</p>;
    }
     
    return <p>水は沸騰していません。</p>;
}

export default BoilingVerdict;