import reactDom from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

reactDom.render(
    <React.StrictMode>
    <Router>
       <App/>
    </Router>
    </React.StrictMode>,
 document.getElementById('root'));
