import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Insurances from "./components/Insurances.js";
import AboutUs from "./components/AboutUs.js";
import Help from "./components/Help.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignInUp from "./components/SignInUp.js";
import AutoInsurance from "./components/AutoInsurance.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Auto-insurance">
            <NavBar />
            <AutoInsurance />
          </Route>
          <Route path="/Sign-In-Up">
            <NavBar />
            <SignInUp />
          </Route>
          <Route path="/">
            <NavBar />
            <CssBaseline>
              <Container>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Insurances />
                  </Grid>
                  <Grid item xs={12}>
                    <AboutUs />
                  </Grid>
                  <Grid item xs={12}>
                    <Help />
                  </Grid>
                </Grid>
              </Container>
            </CssBaseline>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
