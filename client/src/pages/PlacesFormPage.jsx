import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '@/utils/axios';

import AccountNav from '@/components/ui/AccountNav';
import Perks from '@/components/ui/Perks';
import PhotosUploader from '@/components/ui/PhotosUploader';
import Spinner from '@/components/ui/Spinner';

const PlacesFormPage = () => {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);


  const [formData, setFormData] = useState({
    title: '',
    address: '',
    description: '',
    perks: [],
    extraInfo: '',
    checkIn: '',
    checkOut: '',
    price: 500,
    email: '',
    phone: '',
    maxLimit: '',
  });

  const {
    title,
    address,
    description,
    perks,
    extraInfo,
    price,
    email,  // Destructure email
    phone,  // Destructure phone
    maxLimit,
  } = formData;


  const isValidPlaceData = () => {
    if (title.trim() === '') {
      toast.error("Title can't be empty!");
      return false;
    } else if (address.trim() === '') {
      toast.error("Address can't be empty!");
      return false;
    } else if (addedPhotos.length < 5) {
      toast.error('Upload at least 5 photos!');
      return false;
    } else if (description.trim() === '') {
      toast.error("Description can't be empty!");
      return false;
    } else if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email!');
      return false;
    } else if (!phone || !/^\d{10}$/.test(phone)) {
      toast.error('Please enter a valid phone number!');
      return false;
    }
    else if (!maxLimit) {
      toast.error("Acre/Day can't be empty!");
      return false;
    }

    return true;
  };


  // const handleFormData = (e) => {
  //   const { name, value, type } = e.target;
  //   // If the input is not a checkbox, update 'formData' directly
  //   if (type !== 'checkbox') {
  //     setFormData({ ...formData, [name]: value });
  //     return;
  //   }

  //   // If type is checkbox (perks)
  //   if (type === 'checkbox') {
  //     const currentPerks = [...perks];
  //     let updatedPerks = [];

  //     // Check if the perk is already in perks array
  //     if (currentPerks.includes(name)) {
  //       updatedPerks = currentPerks.filter((perk) => perk !== name);
  //     } else {
  //       updatedPerks = [...currentPerks, name];
  //     }
  //     setFormData({ ...formData, perks: updatedPerks });
  //   }
  // };

  const handleFormData = (e) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prevFormData) => {
        const currentPerks = prevFormData.perks || [];
        const updatedPerks = currentPerks.includes(name)
          ? currentPerks.filter((perk) => perk !== name)
          : [...currentPerks, name];

        return { ...prevFormData, perks: updatedPerks };
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: name === "maxLimit" || name === "price" ? Number(value) : value, // Ensure numeric values are stored as numbers
      }));
    }
  };



  const sendOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    toast.info(`OTP sent to your phone number: ${newOtp}`);
  };

  const validateOtp = () => {
    if (otp === generatedOtp) {
      toast.success('OTP verified successfully!');
      savePlace();
      // Proceed with saving data
    } else {
      toast.error('Invalid OTP, please try again!');
    }
  };


  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    axiosInstance.get(`/places/${id}`).then((response) => {
      const { place } = response.data;
      // update the state of formData
      for (let key in formData) {
        if (place.hasOwnProperty(key)) {
          setFormData((prev) => ({
            ...prev,
            [key]: place[key],
          }));
        }
      }

      // update photos state separately
      setAddedPhotos([...place.photos]);

      setLoading(false);
    });
  }, [id]);

  const preInput = (header, description) => {
    return (
      <>
        <h2 className="mt-4 text-2xl">{header}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </>
    );
  };

  const savePlace = async (e) => {
    e.preventDefault();

    const formDataIsValid = isValidPlaceData();

    const placeData = { ...formData, addedPhotos };

    // Make API call only if formData is valid
    if (formDataIsValid) {
      if (id) {
        // update existing place
        const { data } = await axiosInstance.put('/places/update-place', {
          id,
          ...placeData,
        });
      } else {
        // new place
        const { data } = await axiosInstance.post(
          '/places/add-places',
          placeData,
        );
      }
      setRedirect(true);
    }
  };

  const deletePlace = async () => {
    if (window.confirm('Are you sure you want to delete this place?')) {
      await axiosInstance.delete(`/places/${id}`);
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={'/account/places'} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      <AccountNav />
      <form onSubmit={(e) => { e.preventDefault(); validateOtp();}}>
        {preInput(
          'Title',
          'Title for the services you provide, whether it is labor or machinery',
        )}
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleFormData}
          placeholder="For example: Harvester for Corns or Labour for cotton"
        />

        {preInput('Address', 'Location of the service provider.')}
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleFormData}
          placeholder="For Example: Chandwad Maharastra"
        />

        {preInput('Photos', 'Add more images for better clarity')}
        <PhotosUploader
          addedPhotos={addedPhotos}
          setAddedPhotos={setAddedPhotos}
        />

        {preInput('Description', 'Description of the Machine / Labour')}
        <textarea
          value={description}
          name="description"
          onChange={handleFormData}
        />

        {preInput('Perks', 'Select all the perks of your Machine / Labour')}
        <Perks selected={perks} handleFormData={handleFormData} />

        {preInput('Extra info', 'Transportation cost etc.')}
        <textarea
          value={extraInfo}
          name="extraInfo"
          onChange={handleFormData}
        />

        {preInput(
          'Per Acre Rental Price',
          'Specify the minimum amount of rent per Acre.',
        )}
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Price per Acre</h3>
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleFormData}
              placeholder="1"
            />
          </div>
        </div>

        {preInput('Maximum Acre Covered Per Day')}
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Max Acre/Day</h3>
            <input
              type="number"
              name="maxLimit"
              value={formData.maxLimit}  // Use formData.maxLimit
              onChange={handleFormData}
              placeholder="1"
            />
          </div>
        </div>

        {/* New Email Field */}
        {preInput('Email', 'Provide a valid email address.')}
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleFormData}
          placeholder="Enter email"
        />

        {/* New Phone Field */}
        {preInput('Phone', 'Provide a valid phone number.')}
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={handleFormData}
          placeholder="Enter phone number"
        />

        <button
          type="button"
          onClick={sendOtp}
          className="rounded-full bg-lime-500 py-2 px-10 text-sm font-semibold text-white"
        >
          Send OTP
        </button>

        {/* New Phone Field */}
        {preInput('OTP', 'Enter valid otp')}
        <input
          type="number"
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />

        {/* <button
          type="button"
          onClick={sendOtp}
          className="rounded-full bg-lime-500 py-2 px-10 text-sm font-semibold text-white"
        >
          Validate OTP
        </button> */}

        <div className="flex justify-center gap-4">
          <button className="rounded-full bg-lime-500 py-3 px-20 text-xl font-semibold text-white">
            Save
          </button>
          {id && (
            <button
              type="button"
              onClick={deletePlace}
              className="rounded-full bg-lime-500 py-3 px-20 text-xl font-semibold text-white"
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PlacesFormPage;








