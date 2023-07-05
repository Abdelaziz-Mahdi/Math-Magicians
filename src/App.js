import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  const saveClass = 'color-white';
  return (
    <div className="App">
      <Quote sav={saveClass} />
      <Calculator />
    </div>
  );
}

export default App;
