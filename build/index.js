import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {Provider} from "./_snowpack/pkg/react-redux.js";
import App from "./App.js";
import store from "./store/index.js";
import "./styles/index.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
