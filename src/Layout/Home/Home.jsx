import React from "react";
import "./Home.css";

function Home() {
  return (
    <main>
      <section>
        <div className="hero">
          <h1>
            Hello, I'm <span>GANESH KUMAR</span>
          </h1>
          <p>A passionate developer crafting web experiences.</p>
          <a href="/projects" className="btn">
            View My Work
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
