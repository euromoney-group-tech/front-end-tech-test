import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PilotsProvider } from "./context/Pilots";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const theme = createMuiTheme();

const Content = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  </Router>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <PilotsProvider>
      <Content />
    </PilotsProvider>
  </ThemeProvider>
);

export default App;
