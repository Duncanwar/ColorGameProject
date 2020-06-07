import React from 'react'
import ChangeColor from './ChangeColor'

class Color extends React.Component{

    constructor(props){
        super (props);
        this.state={
            
        }
        this.alert=this.alert.bind(this)
    }

    alert(){
        console.log('ok');
    }
       
    render(){
        
        return(
            <div>
       <div>
<h1>THE GREAT<br></br><span id="colorDisplay"></span><br></br>GUESSING GAME<br></br>
</h1>
</div>
                <ChangeColor onClick={this.alert} />
            </div>
        )
    }

}

export default Color