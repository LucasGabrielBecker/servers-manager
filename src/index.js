import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './App';
import AccordionPage from "./Accordion"
import "../node_modules/milligram/dist/milligram.css"


ReactDOM.render(
  <React.StrictMode>
    <AccordionPage />
  </React.StrictMode>,
  document.getElementById('root')
);
