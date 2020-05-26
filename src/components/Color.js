import React from 'react'
import ChangeColor from './ChangeColor'

class Color extends React.Component{

       
    render(){
        
        return(
            <div>
       <div>
<h1>THE GREAT<br></br><span id="colorDisplay"></span><br></br>GUESSING GAME<br></br>
</h1>
</div>
                <ChangeColor />
            </div>
        )
    }

}

export default Color