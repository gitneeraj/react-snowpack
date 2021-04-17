import React from "../_snowpack/pkg/react.js";
import {Route} from "../_snowpack/pkg/react-router-dom.js";
import SiteLayout from "../layouts/SiteLayout.js";
export const PublicRoute = ({
  component: Component,
  restricted,
  layout,
  url,
  ...rest
}) => /* @__PURE__ */ React.createElement(Route, {
  ...rest,
  render: (props) => {
    return layout === false ? /* @__PURE__ */ React.createElement(Component, {
      ...props,
      url
    }) : /* @__PURE__ */ React.createElement(SiteLayout, {
      url
    }, /* @__PURE__ */ React.createElement(Component, {
      ...props
    }));
  }
});
