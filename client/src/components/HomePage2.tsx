import React from 'react';
import './HomePage2.css';
import { useNavigate } from "react-router-dom"; 

const Homepage = () => {
    const navigate = useNavigate();
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="headers">
        <div className="logolaunch">Paw Perfect</div>
        <nav className="navbar">
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Paw Perfect</h1>
          <p>Your one-stop solution for adopting, grooming, and veterinary care for your beloved pets.</p>
          <button className="cta-button">Explore Now</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src="https://th.bing.com/th/id/R.7c7dd4a908ae89641ca674fc464438a3?rik=MGi9gK0MxTkddA&riu=http%3a%2f%2fs19499.pcdn.co%2fwp-content%2fuploads%2f2015%2f08%2fIMG_0090.jpg&ehk=L8M2B1h4bai1rz8%2bXcg6meGS8MQSlCmDc2oQcc9xriY%3d&risl=&pid=ImgRaw&r=0" alt="Adoption Service" className="service-image" />
          <h3>Adoption</h3>
          <p>Find your perfect furry companion. Explore various breeds and find the right match for your family.</p>
          <button
            className="learn-more"
            onClick={() => navigate("/adoption")}
          >
            Learn More
          </button>
        </div>
        <div className="service-card">
          <img src="https://th.bing.com/th/id/R.7d8e6e5f62f577e27128eb8e4b0dd0cc?rik=qcmPgOj1s3RIiw&riu=http%3a%2f%2flovebeverlyhills.com%2fuploads%2fcache%2fImage%2fBlockFeaturedBlock%2fid%2f2933%2f2b7890476c3038a415f0678b86bb49b7c3c1a50b.jpg&ehk=NTeEjthP93DJePKg1%2fjP3fYIQ9FPHCpXNzj2%2bwmpB9I%3d&risl=&pid=ImgRaw&r=0" alt="Grooming Service" className="service-image" />
          <h3>Grooming</h3>
          <p>Professional grooming services to keep your pet looking and feeling great. We offer bathing, haircuts, and more.</p>
          <button
            className="learn-more"
            onClick={() => navigate("/grooming")}
          >
            Learn More
          </button>
        </div>
        <div className="service-card">
          <img src="https://th.bing.com/th/id/OIP.9Jm1__sISXAsj9GBS5rVaAHaE8?rs=1&pid=ImgDetMain" alt="Veterinary Service" className="service-image" />
          <h3>Veterinary Services</h3>
          <p>Comprehensive healthcare for your pets. Our services include check-ups, vaccinations, and medical treatments.</p>
          <button
            className="learn-more"
            onClick={() => navigate("/veterinary")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Paw Perfect helped me find my best friend. Highly recommend!"</p>
            <span>- Alex</span>
          </div>
          <div className="testimonial-card">
            <p>"The grooming services are excellent. My dog looks amazing!"</p>
            <span>- Sarah</span>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Paw Perfect. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
