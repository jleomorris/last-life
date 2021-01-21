import React from "react";
// Components and pages
import Home from "./pages/Home";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// React router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
