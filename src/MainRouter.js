import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./HOC/Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Application from "./Components/Application";
import NewsLetter from "./Components/NewsLetter";

const MainRouter = (props) => {
  return (
      <Layout {...props}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/application" component={Application} />
          <Route exact path="/newsletter" component={NewsLetter} />
        </Switch>
      </Layout>
  );
};

export default MainRouter;
