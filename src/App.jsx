import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
// import './App.css'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Show from "./components/MainPage/Show";
import ShowStartup from "./components/Startup/ShowStartup";
import Process from "./components/Bidding/Process";
import Grouping from "./components/Bidding/Grouping";
import Bid from "./components/Bidding/Bid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Show />
      <Bid/>
      <Footer />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/Angel-Investing/startup" element={<Show />}>
    //       <Route index element={<Show />} />
    //       <Route path="/Angel-Investing/startup" element={<ShowStartup />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;

{
  /* <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div> */
}
