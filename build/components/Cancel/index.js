import {faTimesCircle} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import React from "../../_snowpack/pkg/react.js";
import {NavLink} from "../../_snowpack/pkg/react-router-dom.js";
import "./index.css.proxy.js";
const Cancel = () => {
  return /* @__PURE__ */ React.createElement(NavLink, {
    to: "/",
    className: "go-back"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faTimesCircle,
    className: "faIcons"
  }), /* @__PURE__ */ React.createElement("span", null, "Cancel"));
};
export default Cancel;
