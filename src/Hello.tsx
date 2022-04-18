import React, { useState, useEffect } from 'react';
import "./Hello.css"

function Hello(): JSX.Element {
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
    { text: "About" },
    { text: "CDs" },
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
        <h1><a href="#">Yu^ta's Laboratory</a></h1>
      </div>

      <div className="page-border"></div>

      <div className="page-under-title">
        <div className="navigation-container">
          {
            menuItems.map((menuItem, i) => {
              return (
                <div className="navigation-button-flow" key={i}>
                  <div className="navigation-button-container">
                    <a href="#" className="navigation-button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                        <text className="svg-style-fore" x="50%" y="30" textAnchor="middle">{menuItem.text}</text>
                        <text className="svg-style-back" x="50%" y="30" textAnchor="middle">{menuItem.text}</text>
                      </svg>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>

      <div className="main-container">
        {
          menuItems.map((menuItem, i) => {
            return (
              <div className="routing-container routing-container-{i}" key={i}>
                <h2>{menuItem.text}</h2>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  );
}

export default Hello;
