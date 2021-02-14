import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let text = `
   _____                                  _     _       _                   _                             
  / ____|                                | |   | |     (_)                 | |                            
 | |        __ _   _ __   _ __     __ _  | |_  | |__    _    __ _   _ __   | |       _   _   _ __   __  __
 | |       / _\` | | '__| | '_ \\   / _\` | | __| | '_ \\  | |  / _\` | | '_ \\  | |      | | | | | '_ \\  \\ \\/ /
 | |____  | (_| | | |    | |_) | | (_| | | |_  | | | | | | | (_| | | | | | | |____  | |_| | | | | |  >  < 
  \\_____|  \\__,_| |_|    | .__/   \\__,_|  \\__| |_| |_| |_|  \\__,_| |_| |_| |______|  \\__, | |_| |_| /_/\\_\\
                         | |                                                          __/ |               
                         |_|                                                         |___/                `;

const bannerLog = (message, ...parameters) => {
    console.log(`%c${message}`, "background: linear-gradient(315deg, #0cbaba 0%, #380036 42%); color: #e4e4e4; font-size: 50px; padding: 10px;font-family: 'Josefin Sans', sans-serif;", ...parameters);
}

console.log(text);
// bannerLog(text);
// bannerLog('Silviu');
// bannerLog('CarpathianLynx');

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

document.addEventListener('scroll', (event) => {
    console.log(1);
    console.log(event.target);
});

reportWebVitals();
