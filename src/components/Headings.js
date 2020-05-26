import React from 'react'

class Headings extends React.Component{
    render(){
        return(
            <div>
        <div id="option">
        <button id="reset">New Colors</button>
        <span id="messageDisplay"></span>
        <button class="mode easy" >Easy</button>
        <button class=" mode hard selected">Hard</button>
    </div>
            </div>
            
        )
    }
}

export default Headings;