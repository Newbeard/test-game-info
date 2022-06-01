import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import {BrowserRouter} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
* {
    background: black;
    color: white;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Provider store={store}>
    <BrowserRouter>
    <Global/>
     <App />
    </BrowserRouter>
   </Provider>

);
