import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[loading, setLoading] = useState(false);

  useEffect(() =>{
    console.log("renderizou");
  }, [loading])

  return (
    <div className="App">
        <button onClick={() => setLoading(!loading)}>{loading ? "Loading..." : "Salvar"}</button>
    </div>
  );
}

export default App;
