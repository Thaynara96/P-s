import './App.css';
import { Header } from './components/Header';
import { SkillsList } from './components/SkillsList';

function App () {
  return (
    <div className="App">
      <Header fisrtName="Samuel" />
      <SkillsList Skills={["css", "html", "javascript", "react"]} />
    </div>
  );
}

export default App;