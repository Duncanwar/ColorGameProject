import React from 'react'

class Greet extends React.Component{
    render(props){
        return(React.createElement(
            'div',
            {id:'me',className:"you"},
            React.createElement('h1',null,'No JSx not used')
        )
            
        )
    }
}
export default Greet