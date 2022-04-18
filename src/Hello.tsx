import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./Hello.css"

function Hello(): JSX.Element {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

function MainPage(): JSX.Element {
  const location = useLocation();

  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setTimeout(() => {
      // TODO:
      /*
      const line_count = 80;

      const lines_node = document.querySelector(".lines");
      lines_node.style.opacity = "100%";

      const line_nodes = document.querySelectorAll(".line");
      for (let i = 0; i < line_count; i++) {
        line_nodes[i].style.marginLeft = `${Math.round(1000 * (i + Math.random()) / line_count) / 10}%`;
        line_nodes[i].style.animationDelay = `${-Math.round(45 * 100 * Math.random()) / 100}s`
      }
      */
    }, 500);

    return () => {
      // cancel Timer
      clearTimeout(timer);
    };
  }, [now]);
  const menuItems = [
    { text: "About", href: "/about" },
    { text: "CDs"  , href: "/cds" },
  ];

  return (
    <div className="page-container">
      <div className="page-background"></div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="page-title">
        <h1>
          <NavLink to="/" className={(navData) => navData.isActive ? " disabled-link" : ""}>Yu^ta's Laboratory</NavLink>
        </h1>
      </div>

      <div className="page-border"></div>

      <div className="page-under-title">
        <div className="navigation-container">
          {
            menuItems.map((menuItem, i) => {
              return (
                <div className="navigation-button-flow" key={i}>
                  <div className="navigation-button-container">
                    <NavLink to={menuItem.href} className={(navData) => "navigation-button" + (navData.isActive ? " disabled-link" : "")}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                        <text className="svg-style-fore" x="50%" y="30" textAnchor="middle">{menuItem.text}</text>
                        <text className="svg-style-back" x="50%" y="30" textAnchor="middle">{menuItem.text}</text>
                      </svg>
                    </NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="main-container">
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={
                  <div className="routing-container routing-container-root">
                    <h2>What's new?</h2>
                    <h3>2022/xx/xx</h3>
                    <p>サイトを公開しました。</p>
                  </div>
                } />

                {
                  menuItems.map((menuItem, i) => {
                    return (
                      <Route path={menuItem.href} key={i} element={
                        <div className={`routing-container routing-container-${i}`}>
                          <h2>{menuItem.text}</h2>
                        </div>
                      } />
                    )
                  })
                }

                <Route path="*" element={
                  // Error??
                  // <Navigate to="/" />

                  <meta http-equiv="refresh" content="0;URL=/" />
                } />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default Hello;
