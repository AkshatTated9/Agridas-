import React,{useEffect} from "react";
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
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="mt-20 flex w-full flex-col border- justify-evenly gap-8 md:flex-row p-6">
                {/* Welcome Section */}
                <div className="mt-32 max-w-md">
                    <h1 className="text-4xl font-mono font-bold mb-4">Welcome to Agriconnect!</h1>
                    <p className="text-lg font-mono mb-6">
                    Empowering farmers with seamless access to nearby machines and labor providers. Our platform connects farmers with the resources they need to boost productivity and maximize profits. Simplify your search, rent agricultural machinery, and hire skilled labor effortlessly with Agriconnect!
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
                        Our mission is to enable farmers to discover nearby machine and labor providers essential for farming. By connecting farmers with local services, we help reduce the need to hire or rent from distant locations, cutting expenses and improving profitability. At the same time, Agriconnect supports unemployed laborers in finding work opportunities and machine providers in renting out their equipment, fostering a more sustainable and inclusive agricultural ecosystem.
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
                    <h1 className="text-5xl font-bold text-black mb-4">What We Offer</h1>
                    <p className="text-lg text-gray-700">
                        Discover the services and solutions, Agriconnect provides to make farming smarter, efficient, and community-focused.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Farming Tools for Rent</h2>
                        <p className="text-gray-700 text-center">
                            Access modern farming tools without the burden of ownership. Rent the equipment you need to improve efficiency.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Labor Booking</h2>
                        <p className="text-gray-700 text-center">
                            Connect with skilled laborers in your area to handle farm work effectively and on time.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Sustainable Farming</h2>
                        <p className="text-gray-700 text-center">
                            Learn and implement eco-friendly farming techniques to ensure a greener future.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16">
                                <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61" />
                                <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Advanced Mechanization</h2>
                        <p className="text-gray-700 text-center">
                            Access cutting-edge machinery for your farm to increase productivity and reduce manual labor.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-dots-fill" viewBox="0 0 16 16">
                                <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-center mb-4">Community Network</h2>
                        <p className="text-gray-700 text-center">
                            Join a thriving network of farmers and laborers to share insights, resources, and best practices.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-800 rounded-full mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database-fill-check" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1" />
                                <path d="M2 7v-.839c.457.432 1.004.751 1.49.972C4.722 7.693 6.318 8 8 8s3.278-.307 4.51-.867c.486-.22 1.033-.54 1.49-.972V7c0 .424-.155.802-.411 1.133a4.51 4.51 0 0 0-4.815 1.843A12 12 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777C2.875 8.755 2 8.007 2 7m6.257 3.998L8 11c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13h.027a4.55 4.55 0 0 1 .23-2.002m-.002 3L8 14c-1.682 0-3.278-.307-4.51-.867-.486-.22-1.033-.54-1.49-.972V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-1.3-1.905" />
                            </svg>
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
