import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./HOC/Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Application from "./Components/Application";

const MainRouter = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/application" component={Application} />
        </Switch>
      </Layout>
    </>
  );
};

export default MainRouter;
