import React from "../_snowpack/pkg/react.js";
import {Router, Switch} from "../_snowpack/pkg/react-router-dom.js";
import {history} from "../helpers/index.js";
import {Home, Power, DMList} from "../containers/index.js";
import {PublicRoute} from "./index.js";
export const Routes = () => {
  return /* @__PURE__ */ React.createElement(Router, {
    history
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(PublicRoute, {
    path: "/",
    exact: true,
    component: Home
  }), /* @__PURE__ */ React.createElement(PublicRoute, {
    path: "/power",
    component: Power
  }), /* @__PURE__ */ React.createElement(PublicRoute, {
    path: "/dm-list",
    component: DMList
  }), /* @__PURE__ */ React.createElement(PublicRoute, {
    path: "*",
    component: Home
  })));
};
