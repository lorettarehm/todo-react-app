import "./App.css";
import QuizLogic from "./components/Question/quizLogic.js";
import Footer from "./components/Footer/footer.js";
import TeamCard from "./components/TeamCard/teamcard.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FAB 4</h1>
        <QuizLogic />
        <TeamCard />
        <Footer />
      </header>
    </div>
  );
}

export default App;
