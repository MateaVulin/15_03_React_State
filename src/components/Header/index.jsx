import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <button onClick={this.props.pageHandler}>
          Go to {this.props.page === "Home" ? "About" : "Home"}
        </button>
      </header>
    );
  }
}
