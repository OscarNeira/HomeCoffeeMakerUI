import React, { Component } from 'react'
import MakerActionButton from './MakerActionsButton.js'

let buttonData = require('./CoffeeActions.json')

class MakerActions extends Component{
    
    handleClick(button_url, button_action){
        console.log("MakerActions handle click")
        
        fetch('http://localhost:9000/v1/person/all')
        .then(function(response) {
            console.log(response.json());
        });

        fetch(button_url, {
            method: 'POST',
            headers: {
                Accept: 'text/plain',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 5,
                personId: 1,
                action: button_action
            }),
        })
        .then(function(response){
            console.log(response);
          });
    }

    render(){
        return(
            <main>   
            <section>
            <p className="App-intro">Select Coffee Maker action.</p>        
           </section>
           <section className="buttons">
              {buttonData.coffee_actions.map((coffee_actions, index) => {
                  return <MakerActionButton key={index} button_text={coffee_actions.text} 
                  button_url={coffee_actions.url} 
                  button_action={coffee_actions.action} 
                  clickHandler={this.handleClick.bind(this)}/>
                })}                
             
           </section>
         </main>
        )
    }
}

export default MakerActions