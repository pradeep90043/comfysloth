import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-5e8z-zxk.us.auth0.com"
  clientId="keUiST5SOcVYakiHolPRnmujyoBtzFPE"
  redirectUri="http://localhost:3000/"
>
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
  </Auth0Provider> ,
  document.getElementById("root")
);
