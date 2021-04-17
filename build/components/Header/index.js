import React from "../../_snowpack/pkg/react.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faCog} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
const Header = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "settings"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faCog,
    className: "faIcons"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "system-info"
  }, "system info"));
};
export default Header;
