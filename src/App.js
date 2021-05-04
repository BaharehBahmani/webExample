import './App.css';
import Title from './components/Title'
import PostPage from './components/PostPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Hello class 51!" subtitle={"Today we learn about useState and useEffect"} />
        <PostPage />
      </header>
    </div>
  );
}

export default App;
