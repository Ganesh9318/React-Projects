import React from "react";
import "./Home.css";
import { Link } from "react-router";

function Home() {
  return (
    <main>
      <section>
        <div className="hero">
          <h1>
            Hello, I'm <span>GANESH KUMAR</span>
          </h1>
          <p>A passionate developer crafting web experiences.</p>
          <Link to="/projects" className="btn">
            View My Work
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
