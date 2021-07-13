import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}
