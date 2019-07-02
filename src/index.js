import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import ClientForm from "./Client_form";
import ClientIntern from "./component/clientIntern";
import ProjectInfo from "./projectInfo";

const Path = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/projectform' component={ClientForm} />
        <Route path='/internform' component={ClientIntern} />
        {/* <Route path='/:handle' component={ProjectInfo} /> */}
        <Route path='/projectDetails' component={ProjectInfo} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Path />, document.getElementById("root"));
