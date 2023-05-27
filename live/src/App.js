import logo from './logo.svg';
 import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Addmovies from "./components/Addmovies";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import  Movieslist from "./components/Movieslist";
import  Moviedetails from "./components/Moviedetails";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Favorites from './components/Favorites';
import Relevant from './components/Relevant';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/addmovie" element = {<Addmovies/>}></Route>
        <Route path = "/" element = {< Movieslist/>}></Route>
        <Route path = "/moviedetails/:id" element = {< Moviedetails/>}></Route>
        <Route path = "/Favorites/:id" element = {< Favorites/>}></Route>
        <Route path = "/Relevant/:id" element = {< Relevant/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
