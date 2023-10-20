import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Link, Route, Routes } from "react-router-dom";

const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  );
};

const MyPage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/hats">Hats</Link>

      <h1>THIS PAGE IS NOT EMPTY</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/hats" Component={HatsPage} />
        <Route path="/page/pages" Component={MyPage} />
      </Routes>
    </div>
  );
}

export default App;
