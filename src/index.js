import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {Rootreducer} from "./redux/store"
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(Rootreducer);
ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


