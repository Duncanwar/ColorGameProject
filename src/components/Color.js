import React from 'react'
import {pickColor, generateRandomColor} from './ChangeColor'

class Color extends React.Component{

    constructor(props){
        super (props);
        this.state={
            generatecolor:generateRandomColor(6),
            secretColor:pickColor(6),
            level:6,
            gameState:'Start'
            
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(i){
       const generatecolor = this.state.generatecolor.slice()
        if(this.state.secretColor === i){
        generatecolor.fill(generatecolor[i])
        }
        else{
            generatecolor[i]='none'
            this.state.gameState='End'
        }
        console.log(i,this.state.secretColor)
        this.setState({generatecolor})

    }
    
   
    render(){
         const {generatecolor,level,reset,secretColor} = this.state
         let squares = generatecolor.map((x,i)=>{
         return <div className="squares" style={{background:x}} onClick={this.handleClick.bind(null,i)} key={i}></div>
        })
        return(
            
            <div>
            <div>
        <h1>THE GREAT<br></br><span id="colorDisplay">{generatecolor[secretColor]}</span><br></br>GUESSING GAME<br></br>
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
        <div className="square">{squares}</div>
                  </div>
        )
    }

}

export default Color