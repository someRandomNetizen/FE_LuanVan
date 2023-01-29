import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Builder from "./Builder";
import Dashboard from "./Dashboard";
import DocsPage from "./docs/DocsPage";
import { DriverPage } from "./DriverPage";
import { ShipmentPage } from "./ShipmentPage";
import { ShipmentDetail } from "./ShipmentDetail";
// import LogoutPage from "./Logout";
import { Map } from "./Map";
import { LayoutSplashScreen } from "../../../_metronic";
// import LogoutPage from "../pages/auth/Logout";

const GoogleMaterialPage = lazy(() =>
  import("./google-material/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./react-bootstrap/ReactBootstrapPage")
);

export default function HomePage() {
  // useEffect(() => {
  //   console.log('Home page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/builder" component={Builder} />
        <Route path="/DriverPage" component={DriverPage} />
        <Route path="/ShipmentPage" component={ShipmentPage} />
        <Route path="/ShipmentDetail" component={ShipmentDetail} />
        {/* <Route path="/LogoutPage" component={LogoutPage} /> */}
        <Route path="/Map" component={Map} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/docs" component={DocsPage} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
