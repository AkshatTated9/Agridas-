import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <PayPalScriptProvider options={{ "client-id": "AeoKnhhNbeTqGXWcdEhrAw3yp0DYywQS5GCsB3fXcSg3spR1UW8kEXqotdL8A-g1FTKlzhYneHHPH1x8" }}>
      <App />
    </PayPalScriptProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
