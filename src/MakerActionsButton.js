import React, { Component } from 'react'

/* fetch('http://localhost:9000/v1/person/all')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  }); */

class MakerActionButton extends Component{

    handleClick(){
        console.log("MakerActionButton Click!")      
        this.props.clickHandler(this.props.button_url,this.props.button_action)     
    }

    render(){
        return(                 
            <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>                       
        )
    }
}

export default MakerActionButton