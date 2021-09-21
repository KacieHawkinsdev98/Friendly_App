import reactDom from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

reactDom.render(
    <React.StrictMode>
    <Router>
       <App/>
    </Router>
    </React.StrictMode>,
 document.getElementById('root'));
