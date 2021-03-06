import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import CharacterDetails from "../pages/CharacterDetails";
import AboutUs from "../pages/AboutUs";
import MySpace from "../pages/MySpace";
import Layout from "../components/Layout";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-regular-svg-icons";

library.add(faStar);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/BreakingPedia" component={Home} />
          <Route exact path="/BreakingPedia/about_us" component={AboutUs} />
          <Route exact path="/BreakingPedia/my_space" component={MySpace} />
          <Route
            exact
            path="/BreakingPedia/character/:id"
            component={CharacterDetails}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
