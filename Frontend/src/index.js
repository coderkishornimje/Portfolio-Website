import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Comment from './components/Comment';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Comment/>
  <ScrollToTop/>
  <App />
  </BrowserRouter>
  </React.StrictMode>
);

