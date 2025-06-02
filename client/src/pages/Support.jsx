import React, { useEffect } from "react";
import s_img2 from '../assets/support/s_img2.jpg';
import s_img3 from '../assets/support/s_img3.jpeg';
import s_img4 from '../assets/support/s_img4.jpeg';
import s_img6 from '../assets/support/s_img6.jpeg';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div className=" text-white font-sans">
      <header
        className="relative h-screen bg-cover bg-center flex items-start justify-center mt-8"
        style={{ backgroundImage: `url(${s_img2})` }}
      >
        <div className="text-center pt-20 z-10">
          <p className="text-[#000000] uppercase tracking-widest">Together, Let’s Make Farming Easier</p>
          <h2 className="text-[#000000] text-5xl font-bold leading-tight mt-2">
            Be Ready To Cultivate With<br />Tools, Labor & Technology...!!
          </h2>
          <p className="text-[#000000] mt-4">scroll down ↓</p>
        </div>
      </header>


      <section className="grid md:grid-cols-2 gap-12 px-8 py-20 max-w-6xl mx-auto items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-lime-600 text-2xl uppercase">Safety Guidelines</p>
          <h3 className="text-black text-1xl font-semibold my-4">At Agriconnect, your safety in the field is our top priority. Please follow these guidelines while using rented tools or working with hired laborers</h3>
          <i class="bi bi-cursor-fill"></i>
          <p className="text-gray-900 mb-4">Always inspect tools before use for any damage</p>
          <p className="text-gray-900 mb-4">Wear proper safety gear like gloves, boots, and head protection.</p>
          <p className="text-gray-900 mb-4">Keep the workspace clear and organized to avoid accidents</p>
          <p className="text-gray-900 mb-4">Never use equipment you're unfamiliar with—reach out to us for guidance</p>
          <p className="text-gray-900 mb-4">In case of any issue, stop work and report it to us immediately.</p>
          <a href="#" className="text-lime-600 hover:underline">read more →</a>
        </div>
        <div className="h-full">
          <img src={s_img3} alt="safty" className="rounded-xl" />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 px-8 py-20 bg-[#0F2A3C] max-w-6xl mx-auto items-stretch">
        <div className="h-full">
          <img src={s_img4} alt="maintenance" className="rounded-xl h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#7fff00] uppercase">
            Tool Maintenance Tips – Keep Your Equipment Ready for Every Season
          </p>
          <h3 className="text-1xl font-semibold my-4">
            Maintaining your farming tools isn't just about making them last longer—it's about working smarter and saving money. With a little regular care, you can keep your equipment in great shape, avoid breakdowns, and get the job done more efficiently. Whether you're using hand tools or larger equipment, these simple tips will help you get the best out of every tool in your shed.
          </h3>
          <p className="text-white mb-4">Remove dirt, mud, and plant residue from tools immediately after use to prevent rust and wear.</p>
          <p className="text-white mb-4">Always store tools in a dry, covered area to avoid moisture damage and corrosion.</p>
          <p className="text-white mb-4">Keep blades on tools like sickles, hoes, and cutters sharp for efficient performance and safer handling.</p>
          <p className="text-white mb-4">Apply oil to hinges, joints, and metal parts to prevent rust and ensure smooth movement.</p>
          <p className="text-white mb-4">Check tools for cracks, loose handles, or bent parts and repair or replace as needed before the next use.</p>
          <p className="text-white mb-4">Avoid using tools for tasks they’re not designed for—this prevents unnecessary stress and breakage.</p>
          <a href="#" className="text-[#7fff00] hover:underline">read more →</a>
        </div>
      </section>


      <section className="grid md:grid-cols-2 gap-12 px-8 py-20 max-w-6xl mx-auto items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-lime-600 text-2xl uppercase">Cancellation Policies</p>
          <h3 className="text-black text-1xl font-semibold my-4">
            At Agriconnect, we believe in providing a seamless and stress-free experience for our users. We understand that farming schedules can be unpredictable, so our cancellation policies are designed to offer flexibility and fairness. Users can cancel bookings within 12 hours at no charge, and full refunds are available for cancellations made 24 hours in advance. If canceled on the same day, a 50% refund will be provided, while last-minute cancellations within 2 hours are non-refundable. In cases of severe weather or emergencies, exceptions may apply with proper verification. For any cancellation-related concerns or disputes, our support team is always here to help.
          </h3>
          <p className="text-gray-900 mb-4">You can cancel any booking (tools or labor) within 12 hours of confirmation at no cost.</p>
          <p className="text-gray-900 mb-4">Cancellations made at least 24 hours before the scheduled time will receive a full refund.</p>
          <p className="text-gray-900 mb-4">If canceled less than 24 hours before the booking time, only 50% of the total amount will be refunded.</p>
          <p className="text-gray-900 mb-4">In case of severe weather affecting farming operations, bookings may be canceled with full refund, subject to verification.</p>
          <p className="text-gray-900 mb-4">Cancellations made within 2 hours of the scheduled time will not be eligible for a refund.</p>
          <p className="text-gray-900 mb-4">For any issues or disputes, please contact our support team within 24 hours of cancellation.</p>
          <a href="#" className="text-lime-600 hover:underline">read more →</a>
        </div>
        <div className="h-full">
          <img src={s_img6} alt="policies" className="rounded-xl h-full w-full object-cover" />
        </div>
      </section>


    </div>
  );
};

export default Support;
