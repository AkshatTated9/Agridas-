import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks';
import axiosInstance from '@/utils/axios';
import DatePickerWithRange from './DatePickerWithRange';

const BookingWidget = ({ place }) => {
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    address: '', // New field for user's address
  });
  const [redirect, setRedirect] = useState('');
  const { user } = useAuth();

  const { name, phone, address } = bookingData;
  const { _id: id, price } = place;

  useEffect(() => {
    if (user) {
      setBookingData({ ...bookingData, name: user.name });
    }
  }, [user]);

  const numberOfNights =
    dateRange.from && dateRange.to
      ? differenceInDays(
          new Date(dateRange.to).setHours(0, 0, 0, 0),
          new Date(dateRange.from).setHours(0, 0, 0, 0),
        )
      : 0;

  // Handle booking form input
  const handleBookingData = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async () => {
    // User must be signed in to book a place
    if (!user) {
      return setRedirect(`/login`);
    }

    // Booking data validation
    if (numberOfNights < 1) {
      return toast.error('Please select valid dates');
    } else if (name.trim() === '') {
      return toast.error("Name can't be empty");
    } else if (phone.trim() === '') {
      return toast.error("Phone can't be empty");
    } else if (address.trim() === '') {
      return toast.error("Address can't be empty");
    }

    try {
      const response = await axiosInstance.post('/bookings', {
        checkIn: dateRange.from,
        checkOut: dateRange.to,
        name,
        phone,
        address, // Include address in the booking request
        place: id,
        price: numberOfNights * price,
      });

      const bookingId = response.data.booking._id;

      setRedirect(`/account/bookings/${bookingId}`);
      toast('Congratulations! Booked your Service.');
    } catch (error) {
      if (error.response?.status === 409) {
        const { checkIn, checkOut } = error.response.data.conflict;
        toast.error(
          `The selected dates are already booked from ${new Date(
            checkIn,
          ).toLocaleDateString()} to ${new Date(checkOut).toLocaleDateString()}`
        );
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
      console.log('Error: ', error);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-xl">
      <div className="text-center text-xl">
        Price: <span className="font-semibold">₹{place.price}</span> / per Hour
      </div>
      <div className="mt-4 rounded-2xl border">
        <div className="flex w-full">
          <DatePickerWithRange setDateRange={setDateRange} />
        </div>
        <div className="border-t py-3 px-4">
          <label>Your full name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleBookingData}
          />
          <label>Phone number: </label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleBookingData}
          />
          <label>Address (Where service is needed): </label>
          <input
            type="text"
            name="address"
            placeholder="Enter exact address"
            value={address}
            onChange={handleBookingData}
          />
        </div>
      </div>
      <button onClick={handleBooking} className="primary mt-4 bg-lime-500">
        Book this Service
        {numberOfNights > 0 && <span> ₹{numberOfNights * place.price}</span>}
      </button>
    </div>
  );
};

export default BookingWidget;
