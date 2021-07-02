import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
// import Random from "./components/Random";
import "./styles.css";

//npm start to run it
const App = () => {
  return (
    <div className="App">
      <div className="TitleSection">
        <Header />
        <SearchBar />
        {/* <Random /> */}
      </div>
    </div>
  );
};

export default App;
