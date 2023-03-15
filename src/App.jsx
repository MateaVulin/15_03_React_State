import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  state = {
    page: "Home",
  };
  pageHandler = () => {
    if (this.state.page === "Home") {
      this.setState({
        page: "About",
      });
    } else {
      this.setState({
        page: "Home",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header pageHandler={this.pageHandler} page={this.state.page} />
        <Main page={this.state.page} />
      </div>
    );
  }
}

export default App;
