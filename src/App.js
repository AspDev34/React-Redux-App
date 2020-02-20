import React from 'react';
import PlayerSearch from './components/PlayerSearch';
// import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { playerReducer } from './reducers/playerReducer';
import thunk from 'redux-thunk';

const store = createStore(playerReducer, applyMiddleware(thunk));

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


