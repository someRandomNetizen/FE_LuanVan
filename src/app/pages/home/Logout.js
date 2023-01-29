import React from "react";
import SearchDropdown from "../../partials/layout/SearchDropdown";
import UserNotifications from "../../partials/layout/UserNotifications";
import MyCart from "../../partials/layout/MyCart";
import QuickActionsPanel from "../../partials/layout/QuickActionsPanel";
import QuickPanelToggler from "./QuickPanelToggle";
import LanguageSelector from "../../partials/layout/LanguageSelector";
import UserProfile from "../../partials/layout/UserProfile";
import { toAbsoluteUrl } from "../../utils/utils";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import * as auth from "../../store/ducks/auth.duck";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LayoutSplashScreen } from "../../../_metronic";

class Logout extends Component {
    componentDidMount() {
      this.props.logout();
    }
  
    render() {
      const { hasAuthToken } = this.props;
  
      return hasAuthToken ? <LayoutSplashScreen /> : <Redirect to="/auth" />;
    }
  }
  
  export default connect(
    ({ auth }) => ({ hasAuthToken: Boolean(auth.authToken) }),
    auth.actions
  )(Logout);
