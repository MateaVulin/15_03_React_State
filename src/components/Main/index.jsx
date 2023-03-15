import { Component } from "react";
import Home from "../Home";
import About from "../About";

export default class Main extends Component {
  render() {
    return <main>{this.props.page === "Home" ? <Home /> : <About />}</main>;
  }
}
