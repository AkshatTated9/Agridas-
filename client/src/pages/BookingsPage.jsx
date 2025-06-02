import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AccountNav from '@/components/ui/AccountNav';
import PlaceImg from '@/components/ui/PlaceImg';
import BookingDates from '@/components/ui/BookingDates';
import Spinner from '@/components/ui/Spinner';
import axiosInstance from '@/utils/axios';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('requested'); // added active tab

 useEffect(() => {
  const getBookings = async () => {
    setLoading(true);
    try {
      if (activeTab === 'requested') {
        const { data } = await axiosInstance.get('/bookings/requested');
        setBookings(data.booking);
      } else if (activeTab === 'accepted') {
        const { data } = await axiosInstance.get('/bookings');
        setBookings(data.booking);
      }
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  };

  getBookings();
}, [activeTab]);
 
  if (loading) return <Spinner />;

  return (
    <div className="flex flex-col">
      <AccountNav />

      {/* Booking Filter Buttons with activeTab color logic */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setActiveTab('requested')}
          className={`px-4 py-2 rounded-full font-semibold border ${
            activeTab === 'requested'
              ? 'bg-black text-white'
              : 'bg-white text-black'
          }`}
        >
          Requested Bookings
        </button>
        <button
          onClick={() => {setActiveTab('accepted')}}
          className={`px-4 py-2 rounded-full font-semibold border ${
            activeTab === 'accepted'
              ? 'bg-black text-white'
              : 'bg-white text-black'
          }`}
        >
          Accepted Bookings
        </button>
      </div>

      <div>
        {bookings?.length > 0 ? (
          bookings.map((booking) => (
            <Link
              to={`/account/bookings/${booking._id}`}
              className="mx-4 my-8 flex h-28 gap-4 overflow-hidden rounded-2xl bg-gray-200 md:h-40 lg:mx-80"
              key={booking._id}
            >
              <div className="w-1/6 md:w-2/6">
                {booking?.place?.photos[0] && (
                  <PlaceImg
                    place={booking?.place}
                    className={'h-full w-full object-cover'}
                  />
                )}
              </div>
              <div className="grow py-3 pr-3">
                <h2 className="md:text-2xl">{booking?.place?.title}</h2>
                <div className="md:text-xl">
                  <div className="flex gap-2 border-t "></div>
                  <div className="md:text-xl">
                    <BookingDates
                      booking={booking}
                      className="mb-2 mt-4 hidden items-center text-gray-600  md:flex"
                    />
                    <div className="my-2 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-7 w-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                      <span className="text-xl md:text-2xl">
                        Total price: ₹{booking.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="">
            <div className="flex flex-col items-center">
              <h1 className="my-6 text-3xl font-semibold">Services</h1>
              <hr className="border border-gray-300" />
              <h3 className="pt-6 text-2xl font-semibold">
                No services booked... yet!
              </h3>
              <p>Start your journey toward smarter farming today!</p>
              <Link to="/" className="my-4">
                <div className="flex w-40 justify-center rounded-lg border border-black p-3 text-lg font-semibold hover:bg-gray-50">
                  Start Searching
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
