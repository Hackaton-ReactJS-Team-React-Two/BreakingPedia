import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Build from '../pages/Build'
import Home from '../pages/Home'
import CharacterDetails from '../pages/CharacterDetails'
import ContactUs from '../pages/ContactUs'
import MySpace from '../pages/MySpace'
import Layout from "../components/Layout";

function App() {
  return  (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route exact path="/BreakingPedia" component={Build}  />
            <Route exact path="/" component={Home}  />
            <Route exact path="/contact_us" component={ContactUs}  />
            <Route exact path="/my_space" component={MySpace}  />
            <Route exact path="/character/:id" component={CharacterDetails}  />
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App