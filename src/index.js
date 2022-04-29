import React from 'react';

import { StrictMode } from "react";
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';
import 'jquery-nice-select/css/nice-select.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './static/css/jquery-ui.min.css';
import './static/css/slicknav.min.css';
import './static/css/style.css';
import App from './App';


import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
