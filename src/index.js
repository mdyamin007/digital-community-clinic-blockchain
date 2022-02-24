import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://qsiey8dvhtrj.usemoralis.com:2053/server"
      appId="njVOnluZcmm0SRZXA9TKGAtOCLcYUbCbrQZ06i83"
    >
      <BrowserRouter>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
