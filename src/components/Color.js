import React from 'react'
import {pickColor, generateRandomColor} from './ChangeColor'

class Color extends React.Component{

    constructor(props){
        super (props);
        this.state={
            generatecolor:generateRandomColor(6),
            secretIndex:pickColor(6),
            level:6,
            gameState:'Start'
            
        }
        this.newGame = this.newGame.bind(this)
        this.changeDifficulty = this.changeDifficulty.bind(this)
        this.handleClick= this.handleClick.bind(this)
    }
    newGame(){
        let level = this.state.level
        this.setState({
         generatecolor:generateRandomColor(level),
         secretIndex:pickColor(level),
         gameState:'Start'
        })}


    changeDifficulty(level){
        this.setState({level})
    }

    handleClick(i){
        if(this.state.gameState==='correct') return
       const generatecolor = this.state.generatecolor.slice()
       let gameState;
        if(this.state.secretIndex === i){
        generatecolor.fill(generatecolor[i]);
        gameState='correct'
        }
        else{
            generatecolor[i]='none'
            gameState='wrong'
        }
        console.log(i,this.state.secretIndex)
        this.setState({generatecolor,gameState})

    }
   componentDidUpdate(lastProps,lastState){
       if(lastState.level !== this.state.level)
       this.newGame()
   } 
   
    render(){
         const {generatecolor,level,secretIndex,gameState} = this.state
         const secretColor = generatecolor[secretIndex]      
         let squares = generatecolor.map((x,i)=>{
         return <div className="squares" style={{background:x}} onClick={this.handleClick.bind(null,i)} key={i}></div>
        })
        const messageDisplay = gameState === 'correct' ? 'correct' :gameState =='wrong'?  'wrong' : ''
        const headerColor = gameState === 'correct' ? secretColor : 'steelblue'
        return(
            
            <div>
            <div>
        <h1 style={{background:headerColor}}>THE GREAT<br></br><span id="colorDisplay">{secretColor}</span><br></br>GUESSING GAME<br></br>
</h1>
</div>
<div>
        <div id="option">
        <button id="reset" onClick={this.newGame}>{gameState==='correct'?' PLAY AGAIN' : ' NEW COLORS' }</button>
        <span id="messageDisplay">{messageDisplay}</span>
        <button className={level=== 3 ? 'selected' :''} onClick={this.changeDifficulty.bind(null,3) }>Easy</button>
        <button className={level=== 6 ? 'selected':''} onClick={this.changeDifficulty.bind(null,6)}>Hard</button>
    </div>
            </div>
        <div className="square">{squares}</div>
                  </div>
        )
    }

}

export default Color