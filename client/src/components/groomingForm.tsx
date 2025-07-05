import React, { useState } from 'react';
import './groomingForm.css';

const GroomingForm = () => {
  const [formData, setFormData] = useState({
    petname: '',
    breed: '',
    gender: '',
    size: '',
    aggressive: '',
    age: '',
  });

  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleReset = () => {
    setFormData({
      petname: '',
        breed: '',
        gender: '',
        size: '',
        age: '',
        aggressive: '',
    });
    setFormError("");
    setSuccessMessage("");
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  
  

    try {
      console.log('Form Data Sent:', JSON.stringify(formData));
      const response = await fetch("https://dog-adoption-backend.onrender.com/api/groomingForm", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your groom appointment is booked.Our groomer will shortly contact you!'); // Success message as an alert
        setFormData({
          petname: '',
          breed: '',
          gender: '',
          size: '',
          age: '',
          aggressive: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Error Response:', errorData); // Log the error response for debugging
        setFormError(`Submission failed: ${errorData.message || 'Unexpected error occurred.'}`);
      }
    } catch (error) {
      setFormError('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <>
      <div className="whole">
        <div className="grooming-form-container">
          <form onSubmit={handleSubmit} className="grooming-form">
            <h2>Add Pet Details</h2><br />
            <label>
              Name of your pet?
              <input
                type="text"
                name="petname"
                value={formData.petname}
                onChange={handleChange}
                placeholder="Enter your pet's name"
              />
            </label>

            <label>
              Breed of your pet?
              <select
                name="breed"
                value={formData.breed}
                onChange={handleChange}
              >
                <option value="">Select breed here</option>
                <option value="Labrador">Labrador</option>
                <option value="German Shepherd">German Shepherd</option>
                <option value="Beagle">Beagle</option>
                <option value="Poodle">Poodle</option>
              </select>
            </label>

            <div className="toggle-buttons">
              <p>Gender of your pet?</p>
              <button
                type="button"
                className={formData.gender === 'Female' ? 'active' : ''}
                onClick={() => handleSelect('gender', 'Female')}
              >
                Female
              </button>
              <button
                type="button"
                className={formData.gender === 'Male' ? 'active' : ''}
                onClick={() => handleSelect('gender', 'Male')}
              >
                Male
              </button>
            </div>

            <div className="toggle-buttons">
              <p>Size of your Pet?</p>
              <button
                type="button"
                className={formData.size === 'Small' ? 'active' : ''}
                onClick={() => handleSelect('size', 'Small')}
              >
                Small
              </button>
              <button
                type="button"
                className={formData.size === 'Medium' ? 'active' : ''}
                onClick={() => handleSelect('size', 'Medium')}
              >
                Medium
              </button>
              <button
                type="button"
                className={formData.size === 'Large' ? 'active' : ''}
                onClick={() => handleSelect('size', 'Large')}
              >
                Large
              </button>
            </div>

            <div className="toggle-buttons">
              <p>How aggressive is your pet?</p>
              <button
                type="button"
                className={formData.aggressive === 'Low' ? 'active' : ''}
                onClick={() => handleSelect('aggressive', 'Low')}
              >
                Low
              </button>
              <button
                type="button"
                className={formData.aggressive === 'Normal' ? 'active' : ''}
                onClick={() => handleSelect('aggressive', 'Normal')}
              >
                Normal
              </button>
              <button
                type="button"
                className={formData.aggressive === 'High' ? 'active' : ''}
                onClick={() => handleSelect('aggressive', 'High')}
              >
                High
              </button>
            </div>

            <div className="toggle-buttons">
              <p>How old is your pet?</p>
              <button
                type="button"
                className={formData.age === '< 3 Months' ? 'active' : ''}
                onClick={() => handleSelect('age', '< 3 Months')}
              >
                &lt; 3 Months
              </button>
              <button
                type="button"
                className={formData.age === '< 11 Years' ? 'active' : ''}
                onClick={() => handleSelect('age', '< 11 Years')}
              >
                &lt; 11 Years
              </button>
              <button
                type="button"
                className={formData.age === '11+ Years' ? 'active' : ''}
                onClick={() => handleSelect('age', '11+ Years')}
              >
                11+ Years
              </button>

              <div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
            </div>

        

          </form>
        </div>
        
        {/* Description Section */}
        <div className="description-section">
          <div className="description-item">
            <img src="https://th.bing.com/th/id/R.97bb54fc1205da5e8dae86c569a03b54?rik=8ALhZWj75xLiNA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fHome-PNG-HD.png&ehk=4iUmnPvXc%2fZAOqentE7zFelW8v6vGgte%2b2nqvkFIT8U%3d&risl=&pid=ImgRaw&r=0" alt="In Your Home" />
            <h3>In your home</h3>
            <p>Other than a bathing area and towels, your groomer will take care of everything—including cleanup!</p>
          </div>
          <div className="description-item">
            <img src="https://d1k2jfc4wnfimc.cloudfront.net/assets/awakerisprings/skinimages/best-rate-icon.png" alt="Flat, Transparent Rates" />
            <h3>Flat, transparent rates</h3>
            <p>No hidden fees or price adjustments. Period.</p>
          </div>
          <div className="description-item">
            <img src="https://www.pngmart.com/files/14/Silver-Golden-Badge-Transparent-PNG.png" alt="Professional Experience" />
            <h3>Professional experience</h3>
            <p>All groomers have professional pet grooming experience and offer an in-home alternative to mobile dog grooming, which means less stress for you and your dog.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-column">
          <h4>ThePetNest</h4>
          <ul>
            <li>Blog</li>
            <li>Career</li>
            <li>Support</li>
            <li>About us</li>
            <li>Pet Stores</li>
            <li>Online Pet Shop</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Home Services</h4>
          <ul>
            <li>Pet Grooming</li>
            <li>Dog Training</li>
            <li>Dog Walking</li>
            <li>Home Vet Visit</li>
            <li>Pet Relocation</li>
            <li>Pet Insurance</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Partner</h4>
          <ul>
            <li>Become a Groomer</li>
            <li>Become a Trainer</li>
            <li>Become a Dog Walker</li>
            <li>Become a Pet Boarder</li>
            <li>Pet Grooming Course</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policy</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Cancellation Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <div className="social-media-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GroomingForm;
