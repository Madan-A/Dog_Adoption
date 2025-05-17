import React from "react";
import { useLocation } from "react-router-dom";
import "./dogProfile.css";
import { useNavigate } from "react-router-dom";

const DogProfile: React.FC = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const dog = location.state?.dog; // Retrieve the dog's details passed from the adoption page

  if (!dog) return <div className="error-message">No dog details found</div>;

  return (
    <div className="dog-profile-page">
      {/* Dog Header Section */}
      <header className="dog-header">
        <div className="dog-name-breed">
          <h1>{dog.dogName}</h1>
          <p className="dog-breed">{dog.breed}</p>
        </div>
        <img className="dog-image" src={dog.images} alt={dog.dogName} />
      </header>

      {/* Dog Story/Background */}
      <section className="dog-story">
        <h2>My Story</h2>
        <p>{dog.description}</p>
      </section>

      {/* Health Information */}
      <section className="health-info">
        <h2>Health Information</h2>
        <div className="health-details">
          <div>
            <h3>Vaccination Status</h3>
            <p>{dog.status}</p>
          </div>
          <div>
            <h3>Spayed/Neutered</h3>
            <p>Yes</p>
          </div>
          <div>
            <h3>Last Vet Visit</h3>
            <p>March 2024</p>
          </div>
        </div>
      </section>

      {/* Adoption Details */}
      <section className="adoption-details">
        <h2>Adopt Me!</h2>
        <p>Adoption Fee: $150</p>
        <button className="adopt-button">Adopt Now</button>
      </section>

      {/* Breed Information */}
      <section className="breed-info">
        <h2>About My Breed</h2>
        <p>
          {dog.breed} dogs are known for their friendly and loyal nature. They are
          great family pets and enjoy lots of exercise.
        </p>
      </section>

      {/* Training & Behavior */}
      <section className="training-behavior">
        <h2>Training & Behavior</h2>
        <ul>
          <li>House-trained: Yes</li>
          <li>Good with kids: Yes</li>
          <li>Gets along with other dogs: Yes</li>
        </ul>
      </section>

      {/* Dog's Favorites */}
      <section className="dogs-favorites">
        <h2>Dog’s Favorites</h2>
        <ul>
          <li>Favorite Toy: Rubber Ball</li>
          <li>Favorite Treat: Peanut Butter Biscuits</li>
          <li>Favorite Activity: Fetch</li>
        </ul>
      </section>

      {/* Adopter Requirements */}
      <section className="adopter-requirements">
        <h2>Adopter Requirements</h2>
        <ul>
          <li>Must have a fenced yard</li>
          <li>Experience with dogs</li>
          <li>Ability to provide regular exercise</li>
        </ul>
      </section>

      {/* Testimonials/Success Stories */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial">
          <p>"We adopted Max, and he is the best companion for our family!"</p>
          <p>- John and Jane Doe</p>
        </div>
        <div className="testimonial">
          <p>"Scout is incredibly friendly and a joy to have around!"</p>
          <p>- Sarah and Tom</p>
        </div>
      </section>

      {/* Location & Adoption Center Information */}
      <section className="adoption-center">
        <h2>Location & Adoption Center</h2>
        <p>Address: 123 Dog Street, Pet City</p>
        <p>Hours: Monday - Friday, 9 AM - 6 PM</p>
        <p>Contact: adoption@dogcenter.com</p>
      </section>

      {/* Call to Action */}
      <div className="cta-container">
        <button className="adopt-button" onClick={()=>navigate("/personalinfo")}>Adopt Me Now</button>
      </div>
    </div>
  );
};

export default DogProfile;
