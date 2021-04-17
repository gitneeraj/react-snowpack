import {faBed, faPowerOff, faRedo} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import React from "../../_snowpack/pkg/react.js";
import {Cancel} from "../index.js";
import "./index.css.proxy.js";
const Power = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "power-outer-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "power-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "poweroff power-options"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faPowerOff,
    id: "poweroff",
    className: "faIcons"
  }), /* @__PURE__ */ React.createElement("span", null, "Shutdown")), /* @__PURE__ */ React.createElement("div", {
    className: "restart power-options"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faRedo,
    id: "restart",
    className: "faIcons"
  }), /* @__PURE__ */ React.createElement("span", null, "Restart")), /* @__PURE__ */ React.createElement("div", {
    className: "sleep power-options"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faBed,
    id: "sleep",
    className: "faIcons"
  }), /* @__PURE__ */ React.createElement("span", null, "Sleep"))), /* @__PURE__ */ React.createElement(Cancel, null));
};
export default Power;
