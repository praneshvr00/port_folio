import React, { Fragment } from "react";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import WorkingProjects from "./components/WorkingProjects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Projects />} />
          <Route path="/b" element={<Skills />} />
          <Route path="/c" element={<WorkingProjects />} />
          {/* <Route path="/" element={<AboutMe />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
