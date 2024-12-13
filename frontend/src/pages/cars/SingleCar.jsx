import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from 'react-router-dom'
import { useFetchCarByIdQuery } from '../../redux/cars/carsApi';
import { getImgCar } from '../../utils/getImgUrl';

const SingleCar = () => {
    const {id} = useParams();
    const {data: car} = useFetchCarByIdQuery(id);

    if(isLoading) return <div>Loading....</div>
    if(isError) return <div>Error terjadi pada memuat mobil</div>
  return (
    <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{car.title}</h1>

            <div className=''>
                <div>
                    <img
                        src={`${getImgCar(car.coverImage)}`}
                        alt={car.title}
                        className="mb-8"
                    />
                </div>

                <div className='mb-5'>
                    <p className="text-gray-700 mb-2"><strong>Author:</strong> {car.author || 'admin'}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {new Date(car?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {car?.category}
                    </p>
                    <p className="text-gray-700"><strong>Description:</strong> {car.description}</p>
                </div>

                <button className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                    <FiShoppingCart className="" />
                    <span>Add to Cart</span>

                </button>
            </div>
        </div>
  )
}

export default SingleCar
