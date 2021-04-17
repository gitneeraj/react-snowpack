import React from "../../_snowpack/pkg/react.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faLaptop, faPowerOff} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {NavLink} from "../../_snowpack/pkg/react-router-dom.js";
const Footer = () => {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "footer-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dm-list"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/dm-list",
    activeClassName: "selected"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faLaptop,
    className: "faIcons"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "power-options"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/power",
    activeClassName: "selected"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faPowerOff,
    className: "faIcons"
  }))));
};
export default Footer;
