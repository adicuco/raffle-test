import React from "react";
import { Router } from "@reach/router";

import HomePage from "./routes/HomePage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Auth from "./routes/Auth";
import Challenges from "./routes/Challenges";

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-900 text-white">
      <Router>
        <HomePage path="/" />
        <Login path="login" />
        <Register path="register" />

        <Auth Route={Challenges} path="/challenges" />
      </Router>
    </div>
  );
};

export default App;
