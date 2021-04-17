import React from "../../_snowpack/pkg/react.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {faArrowCircleRight} from "../../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
import "./index.css.proxy.js";
const Login = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "login-wrapper"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/profile.jpg",
    alt: "user avatar"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Username",
    autoFocus: true
  }), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    placeholder: "Password"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "button"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: faArrowCircleRight
  })));
};
export default Login;
