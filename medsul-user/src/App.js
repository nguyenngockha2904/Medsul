import React, { Component } from "react";
import "./App.css";
import HomeScreen from "./Screens/Home";
import Headers from "./Layouts/Header";
import ServiceScreens from "./Screens/Service";
import IntroductionScreen from "./Screens/Intro";
import RecruitmentScreen from "./Screens/Recruitment";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { getAllListService, getAllListServiceType } from "./Redux/action/serviceAction";
import { getAllListTinhThanh } from "./Redux/action/tinhThanhAction";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Headers />
        <Switch>
          {/* <Route exact path="/introduction" component={IntroductionScreen} />
          <Route exact path="/recruitment" component={RecruitmentScreen} /> */}
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    this.props.dispatch(getAllListService());
    this.props.dispatch(getAllListServiceType());
    this.props.dispatch(getAllListTinhThanh());
  }
}

export default connect()(App);
