/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { getImgCar } from '../../utils/getImgUrl';

const CarsCard = ({ car }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="rounded-lg transition-shadow duration-300 p-4 max-w-[1200px] w-full">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-shrink-0 md:w-1/2 w-full border rounded-md overflow-hidden">
            <Link to={`/cars/${car._id}`}>
              <img
                src={getImgCar(car.coverImage)}
                alt={car.title}
                className="w-full h-full object-cover object-center rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>

          <div className="md:w-1/2 w-full">
            <Link to={`/cars/${car._id}`}>
              <h3 className="text-xl font-semibold hover:text-blue-600 mb-2">
                {car?.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-4">
              {car?.description.length > 80 ? `${car.description.slice(0, 80)}...` : car?.description}
            </p>
            <p className="font-medium mb-4">
              Rp{car?.newPrice.toLocaleString()}
            </p>
            <Link to={`/car/${car._id}`}>
              <button className="btn-primary px-6 space-x-1 flex items-center gap-1 bg-red-500 text-white">
                <span>Lihat Selengkapnya</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
