import React from "react"
import Article from "./article.jsx"

class Blog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Article />
            </div>
        )
    }
}

export default Blog;