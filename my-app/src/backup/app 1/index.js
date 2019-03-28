import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './model popup react/popup.css'
// import Popup from './model popup react/popup';
import Survey from './survey/survey';
import './survey/survey.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Survey />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
