import React from "react";
import contactUs from "../assets/AboutUs/contactUs.jpg"

const ContactUs = () => {
    return (
        <div className="mt-20 font-mono">

            <div className="mb-12" >
                <img
                    className="h-[450px] w-full"
                    src={contactUs} 
                    alt="ContactUs Image"
                />
            </div>

            <div
                className="relative text-center mb-12">
                <h1 className="text-5xl font-bold ">
                    Contact Us
                </h1>
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
                    placeholder="Email"
                    className="w-full sm:w-[48%] p-3 border border-lime-500 rounded-md shadow-md focus:ring-2 focus:ring-lime-500"
                />
                <input
                    type="text"
                    placeholder="Phone"
                    className="w-full sm:w-[48%] p-3 border border-lime-500 rounded-md shadow-md focus:ring-2 focus:ring-lime-500"
                />
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-lime-500 rounded-md shadow-md focus:ring-2 focus:ring-lime-500"
                />
                <textarea
                    placeholder="Message"
                    className="w-full h-32 p-3 border border-lime-500 rounded-md shadow-md focus:ring-2 focus:ring-lime-500"
                ></textarea>
                <button className="w-full sm:w-auto px-6 py-2 bg-lime-500 text-white rounded-md shadow-md hover:bg-green-600">
                    Submit
                </button>
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap justify-around gap-8 mt-16 m-12">
                <ContactDetail icon="📞" text="+91 8767608157" />
                <ContactDetail icon="📧" text="annapradata@gmail.com" />
                <ContactDetail icon="📍" text="123 Farm Lane, AgriTown" />
            </div>

            {/* Google Maps Section */}
            <div className="mt-16 m-12">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.98770208444!2d-0.3817827!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb58b464d8f%3A0x7a36266b650ddc73!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1696004567552!5m2!1sen!2suk"
                    className="w-full h-96 border-0 rounded-md"
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

const ContactDetail = ({ icon, text }) => (
    <div className="bg-[#d9f0f3] p-4 rounded-md text-center flex-1 shadow-md">
        <div className="text-2xl mb-2">{icon}</div>
        <p className="font-bold">{text}</p>
    </div>
);

export default ContactUs;
