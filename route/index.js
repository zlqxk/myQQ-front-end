import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import routeMap from "./routeMap";

const Router = () => {
  return (
    <Suspense fallback="">
      <Switch>
        <Route
          key={index}
          x-for={(item, index) in routeMap}
          path={item.path}
          component={item.component}
        />
      </Switch>
    </Suspense>
  );
};

export default withRouter(Router);
