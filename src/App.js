import React, { Component } from 'react';
import Nav from './components/Nav';
import Page from './components/Page';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // pages: ["home", "portfolio", "contact"],
      currentPage: "home"
    }
  }
  handlePageChange = name => {
    this.setState({ currentPage: name })
    console.log(this.state.currentPage)
  }
  render() {
    return (
      <>
        <Nav setCurrentPage={this.handlePageChange} />
        <Page currentPage={this.state.currentPage} setCurrentPage={this.handlePageChange} />
      </>
    )
  }
}
