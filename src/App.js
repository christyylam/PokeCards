import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <div className="TitleSection">
        <Header />
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
