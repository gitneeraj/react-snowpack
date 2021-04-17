import React from "../../_snowpack/pkg/react.js";
import {useSelector} from "../../_snowpack/pkg/react-redux.js";
import {Cancel} from "../index.js";
import "./index.css.proxy.js";
const DMList = () => {
  const dmList = useSelector((state) => state.dmlist.sessions);
  return /* @__PURE__ */ React.createElement("div", {
    className: "dm-list-wrapper"
  }, /* @__PURE__ */ React.createElement("ul", null, dmList.map((dm, idx) => /* @__PURE__ */ React.createElement("li", {
    key: dm + idx
  }, /* @__PURE__ */ React.createElement("img", {
    src: `images/sessions/${dm.key}.png`,
    alt: dm.name,
    height: 64
  }), /* @__PURE__ */ React.createElement("span", null, dm.name)))), /* @__PURE__ */ React.createElement(Cancel, null));
};
export default DMList;
