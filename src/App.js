import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

function rootReducer(state = [], action) {
  switch(action.type) {
    case 'ADD-ONE':
        return state.concat([action.data])
      case 'SUBTRACT-ONE':
        return state.concat([action.data])
      default: 
      return state
  }
}

let store = createStore(rootReducer);

class App extends Component {

  constructor(){
    super()
    store.subscribe(() => {
      console.log('subscribing to store');
      console.log(store.getState());
   });
  }

  increment() {
    store.dispatch({type: 'ADD-ONE', data: 'added one'});
  }

  decrement() {
    store.dispatch({type: 'SUBTRACT-ONE', data: 'subtracted one'});
  }

  render() {
      return (
        <div className="App">
        <h1>Nemanja's counter</h1>
          
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      );
    }
  }
  

export default App;
