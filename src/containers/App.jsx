
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import logo from '../img/1.jpg' ;

import * as pageActions from '../actions/PageActions';

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { setYear } = this.props.pageActions;


    return <div>
      <Page photos={page.photos} year={page.year} setYear={setYear} />
      <User name={user.name} />
      <img src={logo} className="logo_img"></img>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)