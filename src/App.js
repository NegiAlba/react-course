import './App.css';
import Header from './components/Header';

function App() {
  const real = false;
  return (
    <div className="App">
      <h1>Hello 2+2 {real ? "Yes" : "No"}!</h1>
      <Header title="Change me that sh*t"/>
      <Header/>
      <Header/>
    </div>
  );
}

export default App;
