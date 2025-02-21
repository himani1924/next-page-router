import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      
      <p className="text-lg text-center mb-12">Have any questions? We are here to help.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Phone</h2>
          <p className="text-lg">+1 (555) 123-4567</p>
        </div>
      

      <div>
        <h2 className="text-2xl font-semibold mb-4">Email</h2>
        <p className="text-lg">support@example.com</p>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
