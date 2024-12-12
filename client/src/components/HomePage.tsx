// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const HomePage = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Navbar */}
//       <header className="bg-white shadow fixed w-full z-10">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <h1 className="text-4xl font-extrabold text-teal-600">Paw Perfect</h1>
//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <Link to="/services" className="text-lg text-gray-700 hover:text-teal-600">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/testimonials" className="text-lg text-gray-700 hover:text-teal-600">
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-lg text-gray-700 hover:text-teal-600">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           <Link to="/booking" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500">
//             Book Now
//           </Link>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero bg-cover bg-center relative text-white h-screen flex items-center justify-center">
//         <motion.div
//           className="relative text-center"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-5xl font-extrabold mb-4">Discover Your Perfect Dog Service</h2>
//           <p className="text-lg mb-8">Adoption, Boarding, Grooming, and Veterinary Care - All in One Place</p>
//           <motion.a
//             href="#services"
//             className="cta-btn bg-teal-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-teal-500"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Services
//           </motion.a>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;



// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import "./Home.css";

// const HomePage = () => {
//   const services = [
//     {
//       name: "Adoption",
//       imgSrc: "https://patch.com/img/cdn20/users/24252041/20210702/092746/styles/patch_image/public/moco-animal-shelter___02091924959.jpg?width=1200",
//       link: "/adoption",
//       description: "Find your perfect furry companion.",
//     },
//     {
//       name: "Boarding",
//       imgSrc: "https://th.bing.com/th/id/OIP.-Ynxixu8En4eeRkAlRDtpgAAAA?rs=1&pid=ImgDetMain",
//       link: "/boarding",
//       description: "Premium boarding facilities for your dog.",
//     },
//     {
//       name: "Grooming",
//       imgSrc: "https://th.bing.com/th/id/OIP.R7X8-mpCaX5VWhdWiHn1JAHaFs?pid=ImgDet&w=184&h=141&c=7&dpr=1.3",
//       link: "/grooming",
//       description: "Professional grooming to keep your dog happy.",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Navbar */}
//       <header className="bg-white shadow fixed w-full z-10">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <h1 className="text-4xl font-extrabold text-teal-600">Paw Perfect</h1>
//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <ScrollLink to="services" smooth={true} duration={500} className="text-lg text-gray-700 hover:text-teal-600">
//                   Services
//                 </ScrollLink>
//               </li>
//               <li>
//                 <ScrollLink to="testimonials" smooth={true} duration={500} className="text-lg text-gray-700 hover:text-teal-600">
//                   Testimonials
//                 </ScrollLink>
//               </li>
//               <li>
//                 <ScrollLink to="contact" smooth={true} duration={500} className="text-lg text-gray-700 hover:text-teal-600">
//                   Contact Us
//                 </ScrollLink>
//               </li>
//             </ul>
//           </nav>
//           <a href="#booking" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500">
//             Book Now
//           </a>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section
//         className="hero bg-cover bg-center relative text-white h-screen flex items-center justify-center"
//         style={{ backgroundImage: `url('https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Photo.jpg')` }}
//       >
//         <div className="overlay"></div>
//         <motion.div
//           className="relative text-center fade-in"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-5xl font-extrabold mb-4 text-white">Discover Your Perfect Dog Service</h2>
//           <p className="text-lg mb-8 text-gray-200">Adoption, Boarding, Grooming, and Veterinary Care - All in One Place</p>
//           <motion.a
//             href="#services"
//             className="cta-btn bg-teal-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-teal-500"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Services
//           </motion.a>
//         </motion.div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="container mx-auto my-16">
//         <h3 className="text-3xl text-center font-bold text-teal-600 mb-8">Our Services</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="service-card"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={service.imgSrc}
//                 alt={`Dog service - ${service.name}`}
//                 className="w-full h-48 object-cover mb-4 rounded-lg"
//               />
//               <h4 className="text-2xl font-bold mb-2">{service.name}</h4>
//               <p className="text-gray-600 mb-4">{service.description}</p>
//               <Link to={service.link} className="text-teal-600 font-semibold">
//                 Learn More &rarr;
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="bg-gray-100 py-16">
//         {/* Content */}
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-200 py-8">
//         {/* Content */}
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-4xl font-extrabold text-teal-600">Paw Perfect</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/services" className="text-lg text-gray-700 hover:text-teal-600">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-lg text-gray-700 hover:text-teal-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-lg text-gray-700 hover:text-teal-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/booking" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500">
            Book Now
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center relative text-white h-screen flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }} // Use a valid path for the image
      >
        <div className="overlay"></div>
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold mb-4">Discover Your Perfect Dog Service</h2>
          <p className="text-lg mb-8">Adoption, Boarding, Grooming, and Veterinary Care - All in One Place</p>
          <motion.a
            href="#services"
            className="cta-btn bg-teal-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-teal-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto my-16">
        <h3 className="text-3xl text-center font-bold text-teal-600 mb-8">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Adoption",
              imgSrc: "/assets/adoption.jpg", // Replace with a valid path
              link: "/adoption",
            },
            {
              name: "Boarding",
              imgSrc: "/assets/boarding.jpg", // Replace with a valid path
              link: "/boarding",
            },
            {
              name: "Grooming",
              imgSrc: "/assets/grooming.jpg", // Replace with a valid path
              link: "/grooming",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={service.imgSrc}
                alt={service.name}
                className="w-24 h-24 object-cover mx-auto mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">{service.name}</h4>
              <p className="text-gray-600 mb-4">
                Our {service.name} services are designed to provide the best for your dog!
              </p>
              <Link to={service.link} className="text-teal-600 font-semibold">
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl text-teal-600 font-bold mb-8">What Our Clients Say</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["Alex Johnson", "Sarah Lee", "Michael Brown"].map((name, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md w-80 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-4">"Amazing service! Highly recommended for all dog owners."</p>
                <h5 className="font-bold text-teal-600">- {name}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Dog Services. All rights reserved.</p>
          <p className="text-sm">Contact us at: support@dogservices.com | +1 234 567 890</p>
        </div>
      </footer>
    </div>

);
};

export default HomePage;