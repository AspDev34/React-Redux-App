import React from 'react';
import PlayerSearch from './components/PlayerSearch';
import PlayerList from './components/PlayerList';
// import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { playerReducer } from './reducers/playerReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Web28 submission


const store = createStore(playerReducer, applyMiddleware(thunk, logger));

export default function App() {
  return (

    <Provider store={store}>
      <div className="App">
        
        <h1>balldontlie API</h1>
        
        <PlayerSearch />
        <PlayerList />

      </div>
    </Provider>
  );
};


