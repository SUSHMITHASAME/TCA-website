import React from 'react';
import './Home.css'; // optional for styles

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Telugu Cultural Association</h1>
          <h3>IIT Kharagpur</h3>
          <p>Preserving Culture. Celebrating Identity.</p>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <h2>About TCA</h2>
        <p>
          The Telugu Cultural Association (TCA) at IIT Kharagpur is a vibrant community that celebrates the richness of Telugu traditions, language, and festivals. 
          We strive to create a cultural bridge between students and their roots while promoting unity and creativity on campus.
        </p>
        <a href="/about" className="read-more-btn">Read More →</a>
      </section>


      {/* Upcoming Events */}
      <section className="events-preview">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <img src="/springfest.jpg" alt="Spring Fest" />
            <h3>Spring Fest Cultural Night</h3>
            <p>Jan 2025</p>
          </div>
          <div className="event-card">
            <img src="/autumnfest.jpg" alt="Autumn Fest" />
            <h3>Autumn Fest Celebrations</h3>
            <p>Sep 2025</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          To create a space where every Telugu-speaking student at IIT KGP feels at home, connected to their roots while thriving in a diverse cultural ecosystem.
        </p>
      </section>
    </div>
  );
}


export default Home;


