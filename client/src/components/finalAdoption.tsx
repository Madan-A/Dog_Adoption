import React, { useState } from 'react';
import './finalAdoption.css';

const FinalAdoption = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    adoption_date: '',
    notes: '',
    question: '',
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      setFormError('You must agree to the terms and conditions to submit the form.');
      return;
    }
    setFormError('');
    setSuccessMessage('');
  

    try {
      console.log('Form Data Sent:', JSON.stringify(formData));
      const response = await fetch("https://dog-adoption-1-backend.onrender.com/api/finalAdoption", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      
      });

      

      if (response.ok) {
        // setSuccessMessage('Form submitted successfully!');
        alert('Dog Adoption form submitted successfully.Our client will revert back in short time!'); // Success message as an alert
        setFormData({
          name: '',
          email: '',
          phone: '',
          street: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
          adoption_date: '',
          notes: '',
          question: '',
        });
        setAgreeTerms(false);
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
    <div className="forimage">
    <div className="x">
     
      {/* <h1>Adopt Your New Best Friend</h1> */}
      <form onSubmit={handleSubmit} className="adoption-form">
        {/* Personal Information Fields */}
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street"
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
          />
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder="Zip Code"
            required
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
        </label>

        {/* Preferred Adoption Date */}
        <label>
          Preferred Adoption Date:
          <input
            type="date"
            name="adoption_date"
            value={formData.adoption_date}
            onChange={handleChange}
            required
          />
        </label>

        {/* Additional Notes */}
        <label>
          Additional Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Any special requirements?"
          />
        </label>

        {/* Reason for Adoption */}
        <label>
          Why do you want to adopt this dog?
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            rows={3}
            required
          />
        </label>

        {/* Terms and Conditions */}
        <label className="terms">
          <input
            type="checkbox"
            name="terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          I agree to the terms and conditions
        </label>
        {formError && <p className="error-message">{formError}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="submit-button">
          Book Now
        </button>
      </form>

      {/* Footer Section */}
      {/* <footer className="footer">
        <p>Follow us on:</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <p>The National Institute Of Engineering Mysore</p>
      </footer> */}
    </div>
    </div>
  );
};

export default FinalAdoption;
