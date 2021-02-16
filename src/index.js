import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const text = `
   _____                                  _     _       _                   _                             
  / ____|                                | |   | |     (_)                 | |                            
 | |        __ _   _ __   _ __     __ _  | |_  | |__    _    __ _   _ __   | |       _   _   _ __   __  __
 | |       / _\` | | '__| | '_ \\   / _\` | | __| | '_ \\  | |  / _\` | | '_ \\  | |      | | | | | '_ \\  \\ \\/ /
 | |____  | (_| | | |    | |_) | | (_| | | |_  | | | | | | | (_| | | | | | | |____  | |_| | | | | |  >  < 
  \\_____|  \\__,_| |_|    | .__/   \\__,_|  \\__| |_| |_| |_|  \\__,_| |_| |_| |______|  \\__, | |_| |_| /_/\\_\\
                         | |                                                          __/ |               
                         |_|                                                         |___/                `;

console.log(text);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
