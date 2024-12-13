import React, { useEffect } from 'react';
import InputField from '../addCar/InputField';
import SelectField from '../addCar/SelectField';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchCarByIdQuery, useUpdateCarMutation } from '../../../redux/cars/carsApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseUrl';

const UpdateCar = () => {
  const { id } = useParams();
  const { data: carData, isLoading, isError, refetch } = useFetchCarByIdQuery(id);
  const [updateCar] = useUpdateCarMutation();
  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (carData) {
      setValue('title', carData.title);
      setValue('description', carData.description);
      setValue('category', carData?.category);
      setValue('trending', carData.trending);
      setValue('newPrice', carData.newPrice);
      setValue('coverImage', carData.coverImage);
      setValue('model', carData.model);
      setValue('year', carData.year);
      setValue('engine', carData.engine);
      setValue('transmission', carData.transmission);
    }
  }, [carData, setValue]);

  const onSubmit = async (data) => {
    const updateCarData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || carData.coverImage,
      model: data.model,
      year: data.year,
      engine: data.engine,
      transmission: data.transmission,
    };

    try {
      await axios.put(`${getBaseUrl()}/api/cars/edit/${id}`, updateCarData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      Swal.fire({
        title: 'Car Updated',
        text: 'Your car is updated successfully!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, It's Okay!",
      });
      await refetch();
    } catch (error) {
      console.log('Failed to update car.');
      alert('Failed to update car.');
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching car data</div>;

  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Car</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Car Title */}
        <InputField
          label="Car Title"
          name="title"
          placeholder="Enter car title"
          register={register}
        />

        {/* Car Description */}
        <InputField
          label="Description"
          name="description"
          placeholder="Enter car description"
          type="textarea"
          register={register}
        />

        {/* Car Category */}
        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'sedan', label: 'Sedan' },
            { value: 'suv', label: 'SUV' },
            { value: 'hatchback', label: 'Hatchback' },
            { value: 'pickup', label: 'Pickup' },
            { value: 'mpv', label: 'MPV' },
          ]}
          register={register}
        />

        {/* Trending Checkbox */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
          </label>
        </div>

        {/* New Price */}
        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="Enter new price"
          register={register}
        />

        {/* Model */}
        <InputField
          label="Model"
          name="model"
          placeholder="Enter car model"
          register={register}
        />

        {/* Year */}
        <InputField
          label="Year"
          name="year"
          type="number"
          placeholder="Enter car year"
          register={register}
        />

        {/* Engine */}
        <InputField
          label="Engine"
          name="engine"
          placeholder="Enter engine type"
          register={register}
        />

        {/* Transmission */}
        <InputField
          label="Transmission"
          name="transmission"
          placeholder="Enter transmission type"
          register={register}
        />

        {/* Cover Image URL */}
        <InputField
          label="Cover Image URL"
          name="coverImage"
          type="text"
          placeholder="Enter cover image URL"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Car
        </button>
      </form>
    </div>
  );
};

export default UpdateCar;
