import React, { useState } from 'react';
import './grooming.css';
import { useNavigate } from 'react-router-dom';


const Grooming = () => {
    const navigate = useNavigate();
  const [searchPrice, setSearchPrice] = useState<number>(0);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null); // To track active FAQ

  const groomingPackages = [
    { id: 1, name: 'Spa Bath', price:999, description: ['Bath With Shampoo & Conditioner','Blow Dry', 'Nail Clipping','Ear Cleaning','Eyes Cleaning','Paw Massage','Combing/Brushing'] },
    { id: 2, name: 'Bath + Basic Grooming', price: 1499, description:  ['Bath With Shampoo & Conditioner','Blow Dry','Face Haircutting','Sanitary Trim','Nail Clipping','Ear Cleaning','Eye Cleaning','Teeth Cleaning/Mouth Spray','Paw Massage','Combing/Brushing']  },
    { id: 3, name: 'PawLuxe', price: 2499, description:  ['Bath With Shampoo & Conditioner', 'Blow Dry', 'Hair Styling','Eye Cleaning', 'Body Massage','Sanitary Sanitary Clipping','Nail Clipping','Teeth Cleaning/Mouth Spray','Paw Massage','Combing/Brushing','De-Matting','Tick Removal By hand','Anti-Tick Treatment']  },
    { id: 4, name: 'Trans-fur-mation', price: 1499, description:  ['Full Body Trimming', 'Ear Cleaning', 'Ear cleaning','Nail Clipping']  },
    { id: 5, name: 'Full Service', price: 1999, description:   ['Bath With Shampoo & Conditioner', 'Blow Dry', 'Full body Trimming/Zero Haircut','Eye Cleaning', 'Body Massage','Sanitary Trim','Nail Clipping','Teeth Cleaning/Mouth Spray','Paw Massage','Combing/Brushing']   },
   
  ];

  const groomingServices = [
    { id: 1, name: 'Bathing', image: 'https://th.bing.com/th/id/OIP.KR4uu80_69XWlTnrJHVrZAHaEx?rs=1&pid=ImgDetMain', description: 'Full body wash to keep your dog fresh and clean.' },
    { id: 2, name: 'Nail Trimming', image: 'https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_800/grooming-tips-and-tricks-img-3-704w-520h', description: 'Carefully trimmed nails to keep your dog comfortable.' },
    { id: 3, name: 'Teeth Cleaning', image: 'https://www.ellevetsciences.com/wp-content/uploads/2023/01/Dog-dental-care_1200x800-1024x683.jpg', description: 'Keep your dog’s teeth healthy and clean with professional care.' },
    { id: 4, name: 'Hair Styling', image: 'https://external-preview.redd.it/Y4uEJC_qEjqtZHgFEcGgeHV0iacA2FIHGiF3VShJ7n4.jpg?width=960&crop=smart&auto=webp&s=cded26a2574c9e692fe23943204a66b74bc0682a', description: 'Custom grooming for a stylish look that suits your dog.' },
  ];

  const groomingTestimonials = [
    { id: 1, quote: "My dog loved the grooming session! The staff were so kind and the results were amazing.", name: "Sarah", role: "Dog Owner" },
    { id: 2, quote: "Fantastic service! Highly recommend the Premium Grooming package.", name: "John", role: "Dog Owner" },
    { id: 3, quote: "My dog's coat has never looked better. The groomers are truly professionals!", name: "Emma", role: "Dog Owner" },
    { id: 4, quote: "I’ve tried so many grooming services, but this is by far the best. The groomers genuinely care about the pets", name: "MS Dhoni", role: "Dog Owner" }
  ];

  const groomers = [
    { id: 1, name: "Emily", image: "https://www.lorisdoggrooming.com/wp-content/uploads/2021/02/Cheers-8-768x509.png", role: "Lead Groomer", description: "Emily has been a professional groomer for over 10 years and specializes in all dog breeds." },
    { id: 2, name: "Lucas", image: "https://i.pinimg.com/originals/0f/1b/87/0f1b8742923d3b83127761c0b9cfc053.jpg", role: "Senior Groomer", description: "Lucas focuses on gentle grooming techniques and makes sure every dog feels comfortable during the process." },
    { id: 3, name: "Bob", image: "https://th.bing.com/th/id/OIP.JUeAIQYMW9owIssOqgBvUQHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7", role: "Senior Groomer", description: "Lucas focuses on gentle grooming techniques and makes sure every dog feels comfortable during the process." },
  ];

  const faqData = [
    { question: "How often should I groom my dog?", answer: "It depends on the breed, but generally, dogs should be groomed every 4-6 weeks." },
    { question: "Do you provide mobile grooming services?", answer: "Currently, we do not offer mobile grooming, but we are located in a convenient area for you to visit us." },
    { question: "What should I do to prepare my dog for grooming?", answer: "Make sure your dog is calm, and avoid feeding them right before the appointment. It's also helpful to brush their coat beforehand." },
  ];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  const handleNavigate = (selectedPackage: string) => {
    navigate('/groomingForm', { state: { packageName: selectedPackage } });
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index); // Toggle the active FAQ
  };

  return (
    <div className="grooming-container">
      <header className="grooming-header">
        <h1>Professional Grooming Services for Your Dog</h1>
        <p>Pamper your furry friend with the best care and attention!</p>
      </header>

      {/* Services Offered Section */}
      <section className="services-offered">
        <h2>Our Grooming Services</h2>
        <div className="services-list">
          {groomingServices.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grooming Packages */}
      <section className="grooming-services">
        <h2>Our Grooming Packages</h2>
        <div className="filter-container">
          <label>Filter by Price:</label>
          <input
            type="range"
            min="0"
            max="3000"
            value={searchPrice}
            onChange={(e) => setSearchPrice(parseInt(e.target.value))}
          />
          <span>{`₹${searchPrice}`}</span>
        </div>

       
To adapt the provided code so that the description is displayed as a list of points, here's the updated code:

Updated Code
tsx
Copy code
<div className="package-list">
  {groomingPackages
    .filter((pkg) => pkg.price <= searchPrice)
    .map((pkg) => (
      <div
        key={pkg.id}
        className={`package-card ${selectedPackage === pkg.name ? 'selected' : ''}`}
        onClick={() => handlePackageSelect(pkg.name)}
      >
        <h3>{pkg.name}</h3>
        <ul>
          {pkg.description.map((item, index) => (
            <li key={index}><img src="https://th.bing.com/th?id=OIP.Cs_MQcODAFqjh_mqsHuJ5wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="green tick" width="20px" height="20px"/>{item}</li>
          ))}
        </ul>
        <p className="price">₹{pkg.price}</p>
        <button
              className="navigate-button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent parent `onClick` from triggering
                handleNavigate(pkg.name);
              }}
            >
              Book Now
            </button>
      </div>
    ))}
</div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          {groomingTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.quote}"</p>
              <p>- {testimonial.name}, {testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Groomers Section */}
      <section className="groomers-section">
        <h2>Meet Our Expert Groomers</h2>
        <div className="groomers-list">
          {groomers.map((groomer) => (
            <div key={groomer.id} className="groomer-card">
              <img src={groomer.image} alt={groomer.name} />
              <h3>{groomer.name}</h3>
              <p>{groomer.role}</p>
              <p>{groomer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
     {/* FAQ Section */}
     <section className="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-list">
    {faqData.map((faq, index) => (
      <div key={index} className="faq-card" onClick={() => toggleFaq(index)}>
        <div className="faq-question">
          <h3>{faq.question}</h3>
          <span className={`faq-icon ${activeFaq === index ? 'open' : ''}`}>▼</span>
        </div>
        {activeFaq === index && <p className="faq-answer">{faq.answer}</p>}
      </div>
    ))}
  </div>
</section>


      <footer className="footer">
        <p>Follow us on:</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <p>Address: 123 Dog Haven Street, Pet City, PA 12345</p>
      </footer>
    </div>
  );
};

export default Grooming;
