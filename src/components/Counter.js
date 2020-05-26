import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState({
            count:this.state.count+1
        })
    }
    decrement(){
        this.setState(prevState=>({
            count:this.state.count-2
        }))
        console.log(`${this.state.count}`)
    }
    reset(){
        this.setState({count:0})
    }
    render(){
     
        return(
            <div>
                <h1>Count-{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}
export default Counter;