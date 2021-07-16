import React, { useState } from "react";
import * as Icon from "react-feather";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";

function App() {
  const [lightMode, setLightMode] = useState(false); // Made it true if you want to load your site light mode primary

  lightMode
    ? document.body.classList.add("light")
    : document.body.classList.remove("light");

  const handleMode = () => {
    if (!lightMode) {
      setLightMode(true);
      document.body.classList.add("light");
    } else {
      setLightMode(false);
      document.body.classList.remove("light");
    }
  };

  return (
    <BrowserRouter>
      <div className="light-mode">
        <span className="icon">
          <Icon.Sun />
        </span>
        <button
          className={
            lightMode ? "light-mode-switch active" : "light-mode-switch"
          }
          onClick={() => handleMode()}
        ></button>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home lightMode={lightMode} />
        </Route>
        <Route path="/about">
          <About lightMode={lightMode} />
        </Route>
        <Route path="/resume">
          <Resumes lightMode={lightMode} />
        </Route>
        <Route path="/portfolios">
          <Portfolios lightMode={lightMode} />
        </Route>
        <Route path="/blogs" exact>
          <Blogs lightMode={lightMode} />
        </Route>
        <Route path="/blogs/blog-details/:id/:title">
          {(props) => <BlogDetails {...props} lightMode={lightMode} />}
        </Route>
        <Route path="/contact">
          <Contact lightMode={lightMode} />
        </Route>
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
