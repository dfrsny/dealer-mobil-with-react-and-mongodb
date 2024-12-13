import React, { useEffect } from 'react'
import InputField from '../addNews/InputField'
import SelectField from '../addNews/SelectField'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchNewsByIdQuery, useUpdateNewsMutation } from '../../../redux/news/newsApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseUrl';

const UpdateNews = () => {
  const { id } = useParams();
  const { data: newsData, isLoading, isError, refetch } = useFetchNewsByIdQuery(id);
  // console.log(newsData)
  const [updateNews] = useUpdateNewsMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    if (newsData) {
      setValue('title', newsData.title);
      setValue('description', newsData.description);
      setValue('coverImage', newsData.coverImage)
    }
  }, [newsData, setValue])

  const onSubmit = async (data) => {
    const updateNewsData = {
      title: data.title,
      description: data.description,
      coverImage: data.coverImage || newsData.coverImage,
    };
    try {
      await axios.put(`${getBaseUrl()}/api/news/edit/${id}`, updateNewsData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      Swal.fire({
        title: "Book Updated",
        text: "Your book is updated successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!"
      });
      await refetch()
    } catch (error) {
      console.log("Failed to update book.");
      alert("Failed to update book.");
    }
  }
  if (isLoading) return <Loading />
  if (isError) return <div>Error fetching book data</div>
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter book title"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter book description"
          type="textarea"
          register={register}
        />

        <InputField
          label="Cover Image URL"
          name="coverImage"
          type="text"
          placeholder="Cover Image URL"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Book
        </button>
      </form>
    </div>
  )
}

export default UpdateNews