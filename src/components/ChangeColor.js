import React from 'react'
import Headings from './Headings'
import './style.css'

class ChangeColor extends React.Component{

    constructor(props){
        super(props);
       this.randomColor=this.randomColor.bind(this);
    }
    randomColor(){
        
       var squares = document.querySelectorAll('.squares')
       squares.addEventListener("click",(event)=>{
alert("Ok")
       })
      
    }
    
    render(){
        return(
            <div>
                <Headings />
                <div onClick={this.randomColor} id="container">
                <div className="squares"></div>
                <div className="squares"></div>
                <div className="squares"></div>
                <div className="squares"></div>
                <div className="squares"></div>
                <div className="squares"></div>
                </div>
            </div>
        )
    }
}
export default ChangeColor;