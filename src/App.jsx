import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Counter from "./components/Counter";

function App() {
  //constructor(props){
  //state = {
  //page: "Home",
  //}};
  const [page, setPage] = useState("Home");
  const pageHandler = () => {
    if (page === "Home") {
      // this.setState({
      // page: "About",
      //});
      setPage("About");
    } else {
      setPage("Home");
    }
  };

  return (
    <div className="App">
      <Header pageHandler={pageHandler} page={page} />
      <Main page={page} />
      <Counter />
    </div>
  );
}

export default App;
