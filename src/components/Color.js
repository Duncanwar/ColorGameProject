import React from 'react'
import {randomColor, generateRandomColor} from './ChangeColor'

class Color extends React.Component{

    constructor(props){
        super (props);
        this.state={
            generatecolor:generateRandomColor(6),
            level:6,
            reset:'',
            color:'blue'
        }
      
    }
    
   


  

    render(){
         const {generatecolor,level,reset,color} = this.state
         let squares = generatecolor.map((x,i)=>{
         return <div className="squares" style={{background:x}} key={i}></div>
        })
        return(
            
            <div>
                                       <div>
        <h1>THE GREAT<br></br><span id="colorDisplay">{}</span><br></br>GUESSING GAME<br></br>
</h1>
</div>
<div>
        <div id="option">
        <button id="reset">New Colors</button>
        <span id="messageDisplay"></span>
        <button className="mode easy" >Easy</button>
        <button className=" mode hard selected">Hard</button>
    </div>
            </div>
        <div className="squares">{squares}</div>
                  </div>
        )
    }

}

export default Color