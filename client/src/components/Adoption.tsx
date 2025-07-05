
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './adoption.css';
// import handleAdoption from 'C:/Users/M1603QA-MB512WS/OneDrive/Desktop/fluxdog/nie-bootcamp-template/server/src/controllersadoptionDetails.ts';

interface Dog {
    id: number;
    dogName: string;
    breed: string;
    age: string;
    gender: string;
    status: string;
    city: string;
    location: string;
    phone: string;
    description: string;
    images: string; // Assuming images are stored as strings (URLs or filenames)
  }



const Adoption: React.FC = () => {
    // Define the state with the type of `Dog[]`
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [searchBreed, setSearchBreed] = useState<string>(""); // State for search input
     const navigate = useNavigate();
  
  

    useEffect(() => {
      fetch('https://dog-adoption-backend.onrender.com/api/dogs')
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched Dogs Data:", data); // Log fetched data
          setDogs(data);
        })
        .catch((error) => console.error("Error fetching dogs:", error));
    }, []);
    


    const handleDogClick = async (id: number | undefined) => {

      if (!id || isNaN(id)) {
        console.error("Invalid Dog ID:", id);
        return;
      }
        try {
          // Fetch the dog's details from the backend
          const response = await fetch(`https://dog-adoption-backend.onrender.com/api/dogs/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch dog details");
          }
    
          // Parse the response data
          const dogDetails = await response.json();
    
          // Navigate to the individual dog profile page and pass the dog's details
          navigate(`/dog-profile/${id}`, { state: { dog: dogDetails } });
        } catch (error) {
          console.error("Error fetching dog details:", error);
        }
      };

 // Filter dogs based on search input (trim spaces, case insensitive)
 const filteredDogs = dogs.filter((dog) =>
  dog.breed && dog.breed.toLowerCase().trim().includes(searchBreed.toLowerCase().trim())
);
  
   

  return (
    <div className="adoption-page">
      {/* Header Section */}
      <header className="header">
        <div className="logoss">DogAdopt</div>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <button className="cta-button">Adopt Now</button>
        </nav>
      </header>

      {/* Featured Dogs Section */}
      {/* <section className="featured-dogs">
        <h1>Meet Our Featured Dogs</h1>
        <div className="featured-dog-list">
          <div className="dog-card">
            <img src="dog1.jpg" alt="Dog 1" />
            <h2>Buddy</h2>
            <p>Playful Golden Retriever</p>
          </div>
          <div className="dog-card">
            <img src="dog2.jpg" alt="Dog 2" />
            <h2>Max</h2>
            <p>Calm German Shepherd</p>
          </div>
          <div className="dog-card">
            <img src="dog3.jpg" alt="Dog 3" />
            <h2>Luna</h2>
            <p>Sweet Labrador Retriever</p>
          </div>
        </div>
      </section> */}

      <section className="featured-dogs">
        <h1>Meet Our Featured Dogs</h1>
        <div className="featured-dog-list">
          {dogs.map(dog => (
            <div
              key={dog.id}
              className="dog-card"
              onClick={() => {console.log("Dog ID:", dog.id);
                handleDogClick(dog.id)}}
            >
              <img src={dog.images} alt={dog.dogName} width={200} height={150} />

              <h2>{dog.dogName}</h2>
              <p>{dog.breed}</p>

              <button
                  onClick={() => handleDogClick(dog.id)}
                  className="adopt-button"
                >
                  View Details
                </button>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Filters Section */}
      {/* <section className="search-filters">
        <input type="text" placeholder="Search by breed, age, etc." />
        <select>
          <option value="">Filter by Breed</option>
          <option value="golden-retriever">Golden Retriever</option>
          <option value="labrador">Labrador</option>
        </select>
        
        <button>Search</button>
      </section> */}

<section className="search-filters">
        <input
          type="text"
          placeholder="Search by breed"
          value={searchBreed}
          onChange={(e) => setSearchBreed(e.target.value)}
        />
        <button onClick={() => setSearchBreed(searchBreed)}>Search</button>
      </section>

      {/* Grid View of Dog Profiles */}
      {/* <section className="dog-grid">
  <h2>All Dogs Available for Adoption</h2>
  <div className="grid">
    {dogs.map((dog) => (
      <div key={dog.id} className="dog-card">
        <img src={dog.images} alt={dog.dogName} width={200} height={150} />
        <h2>{dog.dogName}</h2>
        <p>{dog.status}</p>
        <button
          onClick={() => {console.log("Dog Object:", dog);console.log("Dog ID Clicked:", dog.id);
            handleDogClick
            (dog.id)}}
          className="adopt-button"
        >
          View Details
        </button>
      </div>
    ))}
  </div>
</section> */}



<section className="dog-grid">
        <h2>All Dogs Available for Adoption</h2>
        <div className="grid">
          {filteredDogs.length > 0 ? (
            filteredDogs.map((dog) => (
              <div key={dog.id} className="dog-card">
                <img src={dog.images} alt={dog.dogName} width={200} height={150} />
                <h2>{dog.dogName}</h2>
                <h4>{dog.breed}</h4>
                <button
                  onClick={() => handleDogClick(dog.id)}
                  className="adopt-button"
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p>No dogs found for this breed.</p>
          )}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonials-list">
          <div className="testimonial-card">
            <p>“Adopting Buddy was the best decision we made!”</p>
            <h3>- Sarah and Family</h3>
          </div>
          <div className="testimonial-card">
            <p>“Max has brought so much joy to our lives!”</p>
            <h3>- John</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-media">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#twitter">Twitter</a>
        </div>
        <div className="app-links">
          <a href="#playstore">Download on Play Store</a>
          <a href="#appstore">Download on App Store</a>
        </div>
        <p>© 2024 DogAdopt | The National Institute Of Engineering,Mysore</p>
      </footer>
    </div>
  );
};

export default Adoption;
