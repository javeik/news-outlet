import "./App.css";
import NewsList from "./NewsList/NewsList";

const App = () => {
  return (
    <div>
      <header className="App-header">Some awesome news</header>

      <body>
        <NewsList />
      </body>
    </div>
  );
};

export default App;
