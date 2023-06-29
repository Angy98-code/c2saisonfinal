import {Routes, Route} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';

//  import Construction from './pages/Construction';

import Home from './home/Home';
import Printemps from "./pages/Printemps";
import Ete from "./pages/Ete";
import Automne from "./pages/Automne";
import Hiver from "./pages/Hiver";
import Error from "./pages/Error"
import Cart from "./pages/Cart";

//import PL from "./pages/PL";

function App() {
  
  return (
    <div className="App">
      {/* ok <Construction /> */}
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="printemps" element={<Printemps/>}/>
        <Route path="ete" element={<Ete/>}/>
      </Routes> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/printemps" element={<Printemps />} />
        <Route path="/été" element={<Ete />} />
        <Route path="/automne" element={<Automne />} />
        <Route path="/hiver" element={<Hiver />} />
        <Route path="/cart" element={<Cart/>} />

        <Route path="/*" element={<Error />} />
      </Routes>

      {/* <Home/> */}
    </div>
  );
}

export default App;


      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>;