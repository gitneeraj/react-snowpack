import React from "../_snowpack/pkg/react.js";
import {Footer, Header} from "../components/index.js";
const SiteLayout = (props) => {
  const {children} = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "sitelayout-wrapper"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "main main-wrapper"
  }, children), /* @__PURE__ */ React.createElement(Footer, null));
};
export default SiteLayout;
