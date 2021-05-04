import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Hello class 51!" subtitle={"Today we learn about useState and useEffect"} />
        <Counter />
      </header>
    </div>
  );
}

export default App;
