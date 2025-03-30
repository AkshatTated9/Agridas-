import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { addDays } from 'date-fns';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks';
import axiosInstance from '@/utils/axios';
import DatePickerWithRange from './DatePickerWithRange';

const BookingWidget = ({ place }) => {
  const [startDate, setStartDate] = useState(null);
  const [acreage, setAcreage] = useState('');
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [redirect, setRedirect] = useState('');
  const { user } = useAuth();

  const { name, phone, address } = bookingData;
  const { _id: id, price } = place;
  const maxAcresPerDay = place.maxLimit || 10;

  useEffect(() => {
    if (user) {
      setBookingData((prev) => ({ ...prev, name: user.name }));
    }
  }, [user]);

  // Calculate end date based on acreage
  const calculateEndDate = () => {
    if (!startDate || !acreage) return null;
    const daysNeeded = Math.ceil(acreage / maxAcresPerDay);
    return addDays(new Date(startDate), daysNeeded - 1);
  };

  const handleBookingData = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    if (!user) return setRedirect(`/login`);
    if (!startDate) return toast.error('Please select a start date');
    if (!acreage || acreage < 1) return toast.error('Enter valid acreage');
    if (name.trim() === '') return toast.error("Name can't be empty");
    if (phone.trim() === '') return toast.error("Phone can't be empty");
    if (address.trim() === '') return toast.error("Address can't be empty");

    const checkOut = calculateEndDate();

    try {
      const response = await axiosInstance.post('/bookings', {
        checkIn: startDate,
        checkOut,
        name,
        phone,
        address,
        acreage,
        place: id,
        price: acreage * price, // Price based on acreage
      });

      if (response.data.success) {
        setRedirect(`/account/bookings/${response.data.pendingBooking._id}`);
        toast.success('Congratulations! Booking request sent.');
      }
    } catch (error) {
      console.error('Full Error Response:', error.response);
      
      if (error.response) {
        console.log('Error Status:', error.response.status);
        console.log('Error Data:', error.response.data);
        
        // Check if backend explicitly returns date conflict
        if (error.response.status === 409) {
          toast.error(error.response.data.message || 'This date is already booked.');
        } else {
          toast.error(error.response.data.message || 'An unexpected error occurred.');
        }
      } else {
        toast.error('Network error or server is down.');
      }
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-xl">
      <div className="text-center text-xl">
        Price: <span className="font-semibold">₹{place.price}</span> / per Acre
      </div>
      <div className="mt-4 rounded-2xl border p-4">
        <label>Select Start Date: </label>
        <DatePickerWithRange setDateRange={({ from }) => setStartDate(from)} />
        
        <label>Enter Acreage: </label>
        <input
          type="number"
          min="1"
          max="100"
          name="acreage"
          value={acreage}
          onChange={(e) => setAcreage(e.target.value)}
          placeholder="Enter acreage"
          className="border p-2 w-full"
        />

        <label>Your full name: </label>
        <input type="text" name="name" value={name} onChange={handleBookingData} />

        <label>Phone number: </label>
        <input type="tel" name="phone" value={phone} onChange={handleBookingData} />

        <label>Address (Where service is needed): </label>
        <input
          type="text"
          name="address"
          placeholder="Enter exact address"
          value={address}
          onChange={handleBookingData}
        />

        {startDate && acreage && (
          <p className="mt-2 text-lg text-gray-700">
            Estimated completion date: <span className='font-mono'>{calculateEndDate()?.toDateString()}</span> 
          </p>
        )}
      </div>

      <button onClick={handleBooking} className="primary mt-4 hover:bg-lime-600">
        Book this Service {acreage && <span> ₹{acreage * place.price}</span>}
      </button>
    </div>
  );
};

export default BookingWidget;
