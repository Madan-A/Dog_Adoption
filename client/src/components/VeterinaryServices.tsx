


import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VeterinaryServices.css";

const VeterinaryServices: React.FC = () => {
  const [formData, setFormData] = useState({
    dogName: "",
    breed: "",
    gender:"",
    age: "",
    appointmentDate: "",
    address: "",
    pincode: "",
    healthDescription: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch("http://localhost:5000/api/veterinary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json(); // Parse the JSON response
        console.log("Form Data Saved Successfully!", result);
        alert("Appointment booked successfully!");
        // Reset the form after successful submission
        setFormData({
          dogName: "",
          breed: "",
          gender:"",
          age: "",
          appointmentDate: "",
          address: "",
          pincode: "",
          healthDescription: "",
        });
      } else {
        const errorResult = await response.json();
        console.error("Failed to Save Data:", errorResult.error);
        alert(`Error: ${errorResult.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to connect to the server. Please try again later.");
    }
  };
  


  

  return (
    <div className="vet-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Veterinary Services</h1>
        <p>Book appointments for your dog with our experienced veterinarians.</p>
        
      </section>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="vet-form">
        <div className="form-group">
          <label htmlFor="dogName">Dog Name:</label>
          <input
            type="text"
            id="dogName"
            name="dogName"
            value={formData.dogName}
            onChange={handleChange}
            placeholder="Enter your dog's name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed">Breed:</label>
          <select id="breed" name="breed" value={formData.breed} onChange={handleChange}>
            <option value="">Select Breed</option>
            <option value="Labrador">Labrador</option>
            <option value="German Shepherd">German Shepherd</option>
            <option value="Bulldog">Bulldog</option>
            <option value="Poodle">Poodle</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Siberian Husky">Siberian Husky</option>
            <option value="Pitbull">Pitbull</option>
            <option value="Rottweiler">Rottweiler</option>
            <option value="Great Dane">Great Dane</option>
            <option value="Pomeranian">Pomeranian</option>
            <option value="Chow Chow">Chow Chow</option>
            <option value="Dachshund">Dachshund</option>
            <option value="Shiba Inu">Shiba Inu</option>
            <option value="St. Bernard">St. Bernard</option>
            <option value="Shih Tzu">Shih Tzu</option>



            


            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age in years"
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
          />
        </div>

        <div className="form-group">
          <label htmlFor="healthDescription">Health Description:</label>
          <textarea
            id="healthDescription"
            name="healthDescription"
            value={formData.healthDescription}
            onChange={handleChange}
            placeholder="Describe your dog's health condition"
          />
        </div>

        <button type="submit" className="submit-button">Book Appointment</button>
      </form>

      {/* About Doctors Section */}
      <section className="about-doctors" data-aos="fade-up">
        <h2>Meet Our Doctors</h2>
        <div className="doctor-cards">
          <div className="doctor-card">
            <img src="https://th.bing.com/th/id/OIP.p1V8iht0SapejcKctC65sAHaEK?rs=1&pid=ImgDetMain" alt="Dr. Smith" />
            <h3>Dr. Smith</h3>
            <p>Dr. Smith is a highly experienced veterinary professional with a special focus on canine health. With over 10 years of practice, Dr. Smith is passionate about ensuring the well-being of dogs through preventive care, accurate diagnosis, and compassionate treatment. Known for a calm and caring approach, Dr. Smith strives to create a positive experience for both pets and their owners.Whether it's an emergency or elective surgery, you can trust Dr. Johnson for exceptional care.</p>
          </div>
          <div className="doctor-card">
            <img src="https://www.veterinarywoman.co.uk/wp-content/uploads/2015/02/iStock_000050727652_Large.jpg" alt="Dr. Sushmitha" />
            <h3>Dr. Sushmitha</h3>
            <p>Dr. Sushmitha is a highly skilled expert in veterinary surgery, specializing in both routine and advanced surgical procedures for pets. With years of experience and a meticulous approach, she ensures each surgery is performed with the highest level of precision and care. Dr. Sushmitha is known for her gentle and compassionate nature, providing comfort to both pets and their owners throughout the surgical process. Her dedication to improving pet health through surgery has earned her a reputation for excellence. Whether it's a simple procedure or a complex operation, Dr. Sushmitha is committed to delivering outstanding results.</p>
          </div>
        </div>
      </section>

      {/* Treated Dogs Section */}
      <section className="treated-dogs" data-aos="fade-up">
        <h2>Dogs We've Treated</h2>
        <div className="dog-cards">
          <div className="dog-card">
            <img src="https://magazine.bucknell.edu/wp-content/uploads/2023/07/mary-ann-img01.jpg" alt="Buddy" />
            <h3>Buddy</h3>
            <p>Buddy is a resilient and brave dog who has recently made a full recovery from a leg injury.  Buddy’s journey to recovery is a testament to his strength and the care he received from his dedicated veterinary team. He's looking for a loving home  now.</p>
          </div>
          <div className="dog-card">
            <img src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/01/dog-skin-disease-768x512.jpg" alt="Max" />
            <h3>Max</h3>
            <p>Max is a brave dog who has made a remarkable recovery after undergoing surgery. With the care and attention he received, Max is now back to his happy and active self, enjoying playtime being a dog. His recovery journey was a true testament and  skill of his veterinary team.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="vet-footer">
        <div className="footer-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <div className="footer-download">
          <a href="#">Download Our App</a>
        </div>
        <address>The National Institute of Engineering,Mysuru</address>
      </footer>
    </div>
  );
};

export default VeterinaryServices;

