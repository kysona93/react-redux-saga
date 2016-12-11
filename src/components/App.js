import React from "react";
import Home from './../components/Home.js';
import "../stylesheets/main.scss";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="container">
        <Home/>
        {/* {this.props.children} */}
      </div>
    );
  }
}
