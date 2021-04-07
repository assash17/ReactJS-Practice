import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import CustomVideoPlayer from "./menu/custom-video-player/components/CustomVideoPlayer";
import Todo from "./menu/Todo/components/Todo";
import Test from "./menu/axios/Test";
import CalculatorContainer from "./menu/calculator/container/CalculatorContainer";

function App() {
  return (
    <>
      <header>
        <h1>React Practice</h1>
      </header>
      <nav>
        <NavLink to="/CustomVideoPlayer" activeClassName="selectedMenu">
          CustomVideoPlayer
        </NavLink>
        <NavLink to="/Todo" activeClassName="selectedMenu">
          Todo
        </NavLink>
        <NavLink to="/Axios" activeClassName="selectedMenu">
          Axios
        </NavLink>
        <NavLink to="/Calc" activeClassName="selectedMenu">
          Calc
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route
            path="/CustomVideoPlayer"
            component={CustomVideoPlayer}
          ></Route>
          <Route path="/Todo" component={Todo}></Route>
          <Route path="/Axios" component={Test}></Route>
          <Route path="/Calc" component={CalculatorContainer}></Route>
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
