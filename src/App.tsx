import React from "react";

import "./App.css";
import NewsList from "./NewsList/NewsList";

const App = () => {
  return (
    <div>
      <header className="App-header">Some awesome news</header>

      <NewsList />
    </div>
  );
};

export default App;
