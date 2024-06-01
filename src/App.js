import React from "react";
import NavBar from "./components/navbar/navbar";
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import { action, comedy, documentaries, horror, originals, romance } from "./urls";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url={action} title="Action" isSmall />
      <Rowpost url={comedy} title="Comedy" isSmall />
      <Rowpost url={horror} title="Horror" isSmall />
      <Rowpost url={romance} title="Romance" isSmall />
      <Rowpost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
