import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
  const isAuth = true
  return (
    <Switch>
      {isAuth && authRoutes.map(({path, Component}) => <Route path={path} component={Component}/>)}
      {publicRoutes.map(({path, Component}) => <Route path={path} component={Component}/>)}
      <Redirect to={'/'}/>
    </Switch>
  );
};

export default AppRouter;