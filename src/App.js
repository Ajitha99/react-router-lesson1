
import './App.css';
import Home from '../src/screens/Home'
import About from '../src/screens/About'
import Posts from '../src/screens/Posts'
import Post from '../src/screens/Post'
import NoMatch from '../src/screens/NoMatch'
import data from './FakeData.json'
import {NavLink, Route, Routes} from 'react-router-dom'
//NavLink - is customizable where as Link from Video tutorial is not.
//NavLink : a component for setting the URL and providing navigation between components in our app without triggering a page refresh.
function App() {
  return (
    <div className="App">
      <div className='links'>
        <nav>
        {/* "/" - is default for home page */}
          <NavLink to ={"/"}>Home</NavLink>
          <NavLink to = {"/about"}>About</NavLink>
          <NavLink to = {"/posts"}>Posts</NavLink>
        </nav>
      </div>
      {/* These render components */}
      <Routes>
        {/* Whenever the url ends with "/" , Home component must be rendered */}
        <Route exact path = "/" element={<Home />}/>
        <Route path = "/about" element={<About />} />
        {/* At the routing, we are passing data as props to <Posts /> */}
        <Route path = "/posts" element={<Posts posts = {data} />} />
        {/* {...data} => we are sending copy of data to Post too */}
        <Route path = "/posts/:post_id" element ={<Post {...data}/>}/>
        <Route path = "*" element = {<NoMatch/>} />
      </Routes>
    </div>
  );
}

export default App;
