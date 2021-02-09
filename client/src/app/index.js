import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Single } from "./components/Single";
import "../index.css";

const styles = {
  container: {
    width: "90%",
    height: "calc(100vh - 200px)",
    margin: "100px auto 0 auto",
    display: "flex"
  },
  blog: {
    flex: "0 1 40%",
    overflow: "scroll"
  }
};
const App = () => {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div style={styles.container}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Single} />
        </Router>
      </div>
    </Fragment>
  );
};
export default App;
