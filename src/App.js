import "./App.css";
import "./components/Header/header.css";
import QuizLogic from "./components/Question/quizLogic.js";
import HeaderPart from "./components/Header/header.js";
import Footer from "./components/Footer/footer.js";
import TeamCard from "./components/TeamCard/teamcard.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageFooter from "./components/ImageFooter/imgfooter";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderPart />
        <QuizLogic />
        <TeamCard />
        <ImageFooter />
        <Footer />
      </header>
    </div>
  );
}

export default App;
