import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import CustomVideoPlayer from "./menu/custom-video-player/components/CustomVideoPlayer";
import Todo from "./menu/Todo/components/Todo";
import Test from "./menu/axios/Test";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <header>
        <h1>React Practice</h1>
      </header>
      <nav>
        <NavLink to="/CustomVideoPlayer" activeClassName="selectedMenu">
          CustomVideoPlayer
        </NavLink>
        {/* <NavLink to="/Todo" activeClassName="selectedMenu">
          Todo
        </NavLink>
        <NavLink to="/Axios" activeClassName="selectedMenu">
          Axios
        </NavLink> */}
        {/* <NavLink to="/ExchangeRage" activeClassName="selectedMenu">
          ExchangeRage
        </NavLink> */}
      </nav>
      <main>
        <Switch>
          <Route
            path="/CustomVideoPlayer"
            component={CustomVideoPlayer}
          ></Route>
          {/* <Route path="/Todo" component={Todo}></Route>
          <Route path="/Axios" component={Test}></Route> */}
          {/* <Route path="/ExchangeRage" component={ExchangeRate}></Route> */}
          <Route
            path=""
            component={() => {
              return <h2>Click Menu!!!</h2>;
            }}
          ></Route>
        </Switch>
      </main>
      <footer>
        <h3>assash17@gmail.com</h3>
      </footer>
    </>
  );
}

export default App;
