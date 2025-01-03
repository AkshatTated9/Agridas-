import React from "react";
import About_img1 from "../assets/AboutUs/About_img1.jpg"
import About_img2 from "../assets/AboutUs/About_img2.jpg"
import About_img3 from "../assets/AboutUs/About_img3.jpg"
import OurVision_img1 from "../assets/AboutUs/OurVision.jpg"
import OurMission_img1 from "../assets/AboutUs/OurMission_img1.jpg"
import Expert_img1 from "../assets/AboutUs/Expert_img1.jpg"
import Expert_img2 from "../assets/AboutUs/Expert_img2.jpg"
import Expert_img3 from "../assets/AboutUs/Expert_img3.jpeg"
import Expert_img4 from "../assets/AboutUs/Expert_img4.jpg"

const AboutUs = () => {
    return (
        <>
            <div className="mt-20 flex w-full flex-col border- justify-evenly gap-8 md:flex-row p-6">
                {/* Welcome Section */}
                <div className="mt-32 max-w-md">
                    <h1 className="text-4xl font-mono font-bold mb-4">Welcome to Agriconnect!</h1>
                    <p className="text-lg font-mono mb-6">
                        Agriconnect bridges the gap between farmers and resources, connecting them with laborers and providing farming tools for rent to make agriculture efficient, affordable, and community-focused.
                    </p>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                        Learn More
                    </button>
                </div>

                {/* Image Section */}
                <div className=" grid grid-cols-2 gap-8">
                    <div className="mt-24 bg-gray-300 h-96 w-72 rounded-md flex items-center justify-center">
                        <img className="text-gray-600 h-full w-full rounded-md"
                            src={About_img1}
                            alt="img1"
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-8">
                        <div className="bg-gray-300 h-64 w-56 rounded-md flex items-center justify-center">
                            <img className="text-gray-600 h-full rounded-md"
                                src={About_img2}
                                alt="img2"
                            />
                        </div>
                        <div className="bg-gray-300 h-64 w-56 rounded-md flex items-center justify-center">
                            <img className="text-gray-600 h-full rounded-md"
                                src={About_img3}
                                alt="img3"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* our mission */}
            {/* <div className="mt-16 m-20 bg-gradient-to-r from-green-100 to-green-300 p-10 rounded-md shadow-lg">
                <h2 className="text-4xl font-mono font-bold text-center text-green-500 mb-8">Our Mission</h2>
                <p className="text-lg font-mono text-center text-gray-700 leading-relaxed">
                    At Agriconnect, our mission is to empower farmers by providing seamless access to essential resources and services. We strive to build a sustainable agricultural ecosystem where collaboration and innovation drive success. By connecting farmers with laborers and tools, we aim to enhance productivity, reduce costs, and foster a community-centric approach to modern farming.
                </p>
                <div className="mt-8 flex justify-center">
                    <button className="bg-lime-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-transform transform hover:-translate-y-1">
                        Join Us
                    </button>
                </div>
            </div> */}


            <div className="min-h-screen flex items-center justify-evenly bg-gray-100 p-10">
                <div className="max-w-5xl bg-white rounded-lg shadow-lg p-8 flex items-center gap-10">
                    {/* Image Section */}
                    <div className="w-1/2">
                        <img
                            src={OurMission_img1}
                            alt="Our Vision"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    {/* Vision Text Section */}
                    <div className="w-1/2">
                        <h2 className="text-4xl font-bold text-center text-green-600 mb-6 font-mono">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-700 text-center leading-relaxed">
                            At Agriconnect, our mission is to empower farmers by providing seamless access to essential resources and services. We strive to build a sustainable agricultural ecosystem where collaboration and innovation drive success. By connecting farmers with laborers and tools, we aim to enhance productivity, reduce costs, and foster a community-centric approach to modern farming.
                        </p>
                    </div>
                </div>
            </div>

            {/* why choose us */}
            <div className="mx-20 my-20 bg-black text-white py-20 px-20 text-center rounded-lg">
                <h2 className="text-3xl font-mono font-bold">Why Choose Us</h2>
                <p className="mt-4 font-mono text-lg">
                    We are committed to providing exceptional services and creating meaningful connections. Here's a glimpse of what we stand for and what makes us unique.
                </p>
                <div className="flex justify-between font-mono items-center mt-28">
                    {/* Card 1 */}
                    <div className="relative bg-white text-gray-800 p-4  rounded-lg shadow-lg w-1/5">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neutral-50 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                            🌱
                        </div>
                        <h3 className="text-lg font-semibold mt-8">Sustainable Solutions</h3>
                        <p className="mt-2 text-sm">Eco-friendly practices for long-term agricultural success.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="relative bg-white text-gray-800 p-4 rounded-lg shadow-lg w-1/5">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neutral-50 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                            🕒
                        </div>
                        <h3 className="text-lg font-semibold mt-8">24/7 Expert Support</h3>
                        <p className="mt-2 text-sm">Round-the-clock guidance for your farming needs.

                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="relative  bg-white text-gray-800 p-4 rounded-lg shadow-lg w-1/5">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neutral-50 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                            🤝
                        </div>
                        <h3 className="text-lg font-semibold mt-8">Reliable Partnerships</h3>
                        <p className="mt-2 text-sm">Building trust and lasting relationships with farmers.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="relative bg-white text-gray-800 p-4 rounded-lg shadow-lg w-1/5">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neutral-50 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                            💡
                        </div>
                        <h3 className="text-lg font-semibold mt-8">Innovative Technology</h3>
                        <p className="mt-2 text-sm">Smart tools to boost efficiency and productivity.

                        </p>
                    </div>
                </div>
            </div>

            {/* what we offer */}
            <div className="p-8 m-20 font-mono">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-green-800 mb-4">What We Offer</h1>
                    <p className="text-lg text-gray-700">
                        Discover the services and solutions, Agriconnect provides to make farming smarter, efficient, and community-focused.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <i className="fas fa-tools text-2xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Farming Tools for Rent</h2>
                        <p className="text-gray-700 text-center">
                            Access modern farming tools without the burden of ownership. Rent the equipment you need to improve efficiency.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <i className="fas fa-handshake text-2xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Labor Booking</h2>
                        <p className="text-gray-700 text-center">
                            Connect with skilled laborers in your area to handle farm work effectively and on time.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <i className="fas fa-leaf text-2xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Sustainable Farming</h2>
                        <p className="text-gray-700 text-center">
                            Learn and implement eco-friendly farming techniques to ensure a greener future.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <i className="fas fa-tractor text-2xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Advanced Mechanization</h2>
                        <p className="text-gray-700 text-center">
                            Access cutting-edge machinery for your farm to increase productivity and reduce manual labor.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <i className="fas fa-network-wired text-2xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Community Network</h2>
                        <p className="text-gray-700 text-center">
                            Join a thriving network of farmers and laborers to share insights, resources, and best practices.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <i className="fas fa-chart-line text-2xl"></i>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Data-Driven Insights</h2>
                        <p className="text-gray-700 text-center">
                            Use analytics and insights to make informed decisions for your farm's growth and sustainability.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our vision */}
            <div className="min-h-screen flex items-center justify-evenly bg-gray-100 p-10">
                <div className="max-w-5xl bg-white rounded-lg shadow-lg p-8 flex items-center gap-10">
                    {/* Image Section */}
                    <div className="w-1/2">
                        <img
                            src={OurVision_img1}
                            alt="Our Vision"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    {/* Vision Text Section */}
                    <div className="w-1/2">
                        <h2 className="text-4xl font-bold text-center text-green-600 mb-6 font-mono">
                            Our Vision
                        </h2>
                        <p className="text-lg text-gray-700 text-center leading-relaxed">
                            At Agriconnect, our vision is to revolutionize agriculture by fostering a culture of innovation and collaboration. We aim to create a future where farmers have access to advanced tools, skilled labor, and a supportive community. Together, we envision a sustainable agricultural ecosystem that not only meets today's challenges but thrives for generations to come.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-black font-mono rounded-md m-16  text-white py-16">
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold">Meet our experts</h1>
                </div>

                {/* Experts Section */}
                <div className="flex justify-evenly ">
                    {/* Expert 1 */}
                    <div className="bg-white border-8 border-white rounded-lg p-4 shadow-lg">
                        <img
                            src={Expert_img1}
                            alt="AT"
                            className="w-64 h-80 object-cover rounded-md"
                        />
                        <h3 className="text-black text-center mt-4 text-lg font-medium">
                            Akshat Tated
                        </h3>
                    </div>

                    {/* Expert 2 */}
                    <div className="bg-white border-8 border-white rounded-lg p-4 shadow-lg">
                        <img
                            src={Expert_img2}
                            alt="AG"
                            className="w-64 h-80 object-cover rounded-md"
                        />
                        <h3 className="text-black text-center mt-4 text-lg font-medium">
                            Abhijit Gaikwad
                        </h3>
                    </div>

                    {/* Expert 3 */}
                    <div className="bg-white border-8 border-white rounded-lg p-4 shadow-lg">
                        <img
                            src={Expert_img3}
                            alt="DJ"
                            className="w-64 h-80 object-cover rounded-md"
                        />
                        <h3 className="text-black text-center mt-4 text-lg font-medium">
                            Devansh Jain
                        </h3>
                    </div>

                    {/* Expert 4 */}
                    <div className="bg-white border-8 border-white rounded-lg p-4 shadow-lg">
                        <img
                            src={Expert_img4}
                            alt="SL"
                            className="w-64 h-80 object-cover rounded-md"
                        />
                        <h3 className="text-black text-center mt-4 text-lg font-medium">
                            Sujal Lodha
                        </h3>
                    </div>
                </div>
            </div>

        </>
    )
};

export default AboutUs;
