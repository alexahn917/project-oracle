import React from 'react';
import {Route, Switch} from 'react-router-dom'
import ArticleFeeds from "../pages/articles/ArticleFeeds";
import Chart from "../pages/chart/Chart";
import SearchArea from "../pages/search/Search";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFound";

export default class Routes extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/search' component={SearchArea}/>
          <Route exact path='/chart' component={Chart}/>
          <Route exact path='/articles' component={ArticleFeeds}/>
          <Route component={NotFound}/>
        </Switch>
    );
  }
}