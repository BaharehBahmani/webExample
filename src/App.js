import './App.css';
import Title from './components/Title'
import PostPage from './components/PostPage';
import SignupForm from './components/SignupForm';
import Counter from './components/Counter'
import { Switch, Route, NavLink } from 'react-router-dom'

{/* <Title title="Hello class 51!" subtitle={ activeClassName="selected""Today we learn about useState and useEffect"} /> */}


const NavBar = () => {
  return (
    <div style={{ marginBottom: 30 }}>
      <NavLink exact activeStyle={{ fontWeight: "bold", color: "red"}} to="/" style={{ margin: 20 }}>Home</NavLink>
      <NavLink activeStyle={{ fontWeight: "bold", color: "red"}} to="/posts" style={{ margin: 20 }}>Post Page</NavLink>
      <NavLink activeStyle={{ fontWeight: "bold", color: "red"}} to="/counter" style={{ margin: 20 }}>Counter page</NavLink>
    </div>
  )
}


function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/posts" component={PostPage} />
          <Route path="/counter" component={Counter} />
          <Route path="/" component={SignupForm} />
        </Switch>
    </div>
  );
}

export default App;
