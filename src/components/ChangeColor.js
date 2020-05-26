import React from 'react'
import Headings from './Headings'
import './style.css'

class ChangeColor extends React.Component{
    render(){
        return(
            <div>
                <Headings />
                <div id="container">
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