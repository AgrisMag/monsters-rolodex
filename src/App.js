import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super(); //calls constructor on Component
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asd1'
        },
        {
          name: 'Dracula',
          id: 'asd2'
        },
        {
          name: 'Zombie',
          id: 'asd3'
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>)
          )}
      </div>
    )
  }
}

export default App;
