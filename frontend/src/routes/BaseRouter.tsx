import { ThemeProvider, useTheme, Theme } from "@material-ui/core/styles";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Loading from "../components/Loading/Loading";

const Details = React.lazy(() => import("../pages/Details"));
const BaseRouter = () => {
  const theme: Theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Suspense fallback={Loading}>
            <Route path="/details/:id" component={Details} />
          </Suspense>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default BaseRouter;
