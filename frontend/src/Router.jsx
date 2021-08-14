import React from "react";
import { Route, Switch } from "react-router";

import Favorites from "./containers/Favorites";
import Home from "./containers/Home";
import Preview from "./components/Common/Preview";
import Search from "./containers/Search";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/preview" component={Preview} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </>
  );
};
export default Router;
