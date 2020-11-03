import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./RouteWithLayout";
import Grid from "./grid";
import Template from "./template";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/Adventure" />
        <Grid path="/home" />
        <RouteWithLayout
          component={Grid}
          grid="BestSeller"
          exact
          layout={Template}
          path="/BestSeller"
        />
        <RouteWithLayout
          component={Grid}
          grid="Adventure"
          exact
          layout={Template}
          path="/Adventure"
        />
        <RouteWithLayout
          component={Grid}
          grid="Fiction"
          exact
          layout={Template}
          path="/Fiction"
        />
        <RouteWithLayout
          component={Grid}
          grid="Biography"
          exact
          layout={Template}
          path="/Biography"
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
