import React from 'react';
import PlayerSearch from './components/PlayerSearch';
// import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { playerReducer } from './reducers/playerReducer';

const store = createStore(playerReducer);

export default function App() {
  return (

    <Provider store={store}>
      <div className="App">
        
        <h1>balldontlie API</h1>
        
        <PlayerSearch />

      </div>
    </Provider>
  );
};


