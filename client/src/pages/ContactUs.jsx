import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log the form data to debug
    console.log("Form Data:", formData);

    // Basic form validation
    if (!formData.email || !formData.name || !formData.message) {
      alert("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Log the response to debug
      console.log("Response:", response);

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          email: "",
          phone: "",
          name: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-20 font-mono">
      {/* Header */}
      <div className="relative text-center mb-12">
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>

      {/* Description */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-gray-700 text-lg">
          We're here to help! Feel free to reach out with any inquiries or
          suggestions. Let's connect and grow together.
        </p>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto flex flex-wrap gap-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full sm:w-[48%] p-3 border border-lime-500 rounded-md shadow-md focus:ring-2 focus:ring-lime-500"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full sm:w-[48%] p-3 border border-lime-500 rounded-md shadow-md focus:ring-2 focus:ring-lime-500"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 border border-lime-500 rounded-md shadow-md focus:ring-2 focus:ring-lime-500"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full h-32 p-3 border border-lime-500 rounded-md shadow-md focus:ring-2 focus:ring-lime-500"
          required
        ></textarea>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-2 bg-lime-500 text-white rounded-md shadow-md hover:bg-green-600"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>

      {/* Contact Details */}
      <div className="flex flex-wrap justify-around gap-8 mt-16 m-12">
        <ContactDetail icon="📞" text="+91 8767608157" />
        <ContactDetail icon="📧" text="annapradata@gmail.com" />
        <ContactDetail icon="📍" text="123 Farm Lane, AgriTown" />
      </div>
    </div>
  );
};

// Contact Details Component
const ContactDetail = ({ icon, text }) => (
  <div className="bg-[#d9f0f3] p-4 rounded-md text-center flex-1 shadow-md">
    <div className="text-2xl mb-2">{icon}</div>
    <p className="font-bold">{text}</p>
  </div>
);

export default ContactUs;
