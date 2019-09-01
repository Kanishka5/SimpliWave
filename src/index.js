import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ClientDashboard from "./client_dashboard";
import StdDashboard from "./student_dashboard";
import ClientForm from "./Client_form";
import ClientIntern from "./component/clientIntern";
import ProjectInfo from "./projectInfo";
// import TxtEditor from "./component/txt_editor";
import TxtEditor from "./component/codeEditor";
import SignupStd from "./signupStd";
import Login from "./login";
import Chat from "./component/chat";
import SignupClt from "./signupClt";
import Verify from "./component/verify";
import ProjectList from "./component/projectApply";
import ProjectPosted from "./component/prjPosted";
import ProjectProg from "./component/prjctProg";
require("dotenv").config();

const Path = () => {
  //   window.onbeforeunload = function() {
  //     localStorage.clear();
  //   };
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/cltdashboard' component={ClientDashboard} />
        <Route path='/stdDashboard' component={StdDashboard} />
        <Route path='/projectform' component={ClientForm} />
        <Route path='/internform' component={ClientIntern} />
        {/* <Route path='/:handle' component={ProjectInfo} /> */}
        <Route path='/projectDetails' component={ProjectInfo} />
        <Route path='/txtEditor' component={TxtEditor} />
        <Route path='/stdsignup' component={SignupStd} />
        <Route path='/cltsignup' component={SignupClt} />
        <Route path='/login' component={Login} />
        <Route path='/chat' component={Chat} />
        <Route path='/verify' component={Verify} />
        <Route path='/apply' component={ProjectList} />
        <Route path='/prjctposted' component={ProjectPosted} />
        <Route path='/prjctProg' component={ProjectProg} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Path />, document.getElementById("root"));
