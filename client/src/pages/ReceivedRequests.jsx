import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axios';
import { toast } from 'react-toastify';
import AccountNav from '@/components/ui/AccountNav';

const ReceivedRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReceivedRequests = async () => {
      try {
        const { data } = await axiosInstance.get('/bookings/received-requests');
        setRequests(data.receivedRequests);
      } catch (error) {
        toast.error(error.response?.data?.message || 'Error fetching requests');
      } finally {
        setLoading(false);
      }
    };

    fetchReceivedRequests();
  }, []);

  const handleApprove = async (bookingId) => {
    try {
      const response = await axiosInstance.put(`/bookings/approve/${bookingId}`);
  
      if (response.data.success) {
        toast.success('Booking approved successfully');
        
        // Remove the approved request from UI
        setRequests((prevRequests) => prevRequests.filter(req => req._id !== bookingId));
      } else {
        toast.error(response.data.message || 'Failed to approve booking');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error approving booking');
    }
  };

  const handleDisapprove = async (bookingId) => {
    try {
      const response = await axiosInstance.delete(`/bookings/disapprove/${bookingId}`);

      if (response.data.success) {
        toast.success('Booking request disapproved');
        setRequests((prevRequests) => prevRequests.filter(req => req._id !== bookingId));
      } else {
        toast.error(response.data.message || 'Failed to disapprove booking');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error disapproving booking');
    }
  };
  if (loading) return <p>Loading...</p>;

  return (
    
    <div className="p-4">
      <AccountNav />
      <h2 className="text-2xl font-semibold mb-4">Received Booking Requests</h2>

      {requests.length === 0 ? (
        <p>No new booking requests yet.</p>
      ) : (
        requests.map((request) => (
          <div key={request._id} className="border p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold">{request.place.title}</h3>
            <p><strong>Customer:</strong> {request.user.name}</p>
            <p><strong>Phone:</strong> {request.phone}</p>
            <p><strong>Start Date:</strong> {new Date(request.checkIn).toDateString()}</p>
            <p><strong>End Date:</strong> {new Date(request.checkOut).toDateString()}</p>
            <p><strong>Address:</strong> {request.address}</p>
            <p><strong>Total Price:</strong> ₹{request.price}</p>

          <button 
            className="bg-green-500 text-white p-2 rounded mt-2" 
            onClick={() => handleApprove(request._id)}
          >
            Approve Request
          </button>
          <button 
                className="bg-red-500 text-white p-2 m-2 rounded mt-2" 
                onClick={() => handleDisapprove(request._id)}
              >
                Disapprove Request
          </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ReceivedRequests;
