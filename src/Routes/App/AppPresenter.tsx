import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

const Routes: React.SFC = () => <Switch />;

export default AppPresenter;
