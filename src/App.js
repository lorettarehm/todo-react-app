import "./App.css";
import "./components/Header/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderPart from "./components/Header/header.js";
import Footer from "./components/Footer/footer.js";
import TeamCard from "./components/TeamCard/teamcard.js";
import TopNav from "./components/Header/navbar.js";
import ImageFooter from "./components/ImageFooter/imgfooter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        <HeaderPart />
      
        <TeamCard />
        <ImageFooter />
        <Footer />
      </header>
    </div>
  );
}

export default App;
