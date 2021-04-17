import React from 'react'
import { Route } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'

export const PublicRoute = ({
  component: Component,
  restricted,
  layout,
  url,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return layout === false ? (
        <Component {...props} url={url} />
      ) : (
        <SiteLayout url={url}>
          <Component {...props} />
        </SiteLayout>
      )
    }}
  />
)
