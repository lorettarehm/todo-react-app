import "./App.css";
import "./components/Header/header.css";
import QuizLogic from "./components/Question/quizLogic.js";
import HeaderPart from "./components/Header/header.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderPart />
        <QuizLogic />
      </header>
    </div>
  );
}

export default App;
