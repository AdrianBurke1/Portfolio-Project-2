import React from 'react';
import About from "./About/About"
import './aboutcontacts.css'; 

function AboutContact() {
  return (
    <div>
      <About /> {/* Render the About component */}
      
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
        efficitur lorem, id vehicula elit. Integer vel aliquam massa. Nulla
        facilisi. Sed congue vel purus sit amet tincidunt. Vestibulum
        pellentesque quam ut est cursus, ac volutpat justo venenatis. Nam nec
        euismod mi. Vestibulum sagittis laoreet sapien, sed tincidunt tortor
        consequat sed.
      </p>
      <h1>Contact Us</h1>
      <p>
        If you have any questions or feedback, please feel free to contact us.
        You can reach us at:
      </p>
      <ul>
        <li>Email: example@example.com</li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
    </div>
  );
}

export default AboutContact;
