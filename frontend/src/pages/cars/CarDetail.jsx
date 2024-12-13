import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCarByIdQuery } from "../../redux/cars/carsApi"; // Pastikan pathnya benar
import { getImgCar } from '../../utils/getImgUrl';

const CarDetail = () => {
  const { carId } = useParams(); // Mendapatkan ID mobil dari URL
  const { data: car, isLoading, error } = useFetchCarByIdQuery(carId); // Mengambil data mobil berdasarkan ID

  // Loading dan error state
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="py-10">
      <div className="w-full px-4 mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Gambar Mobil */}
          <div className="md:w-1/2 w-full border rounded-md overflow-hidden">
            <img
              src={getImgCar(car.coverImage)} // Menampilkan gambar mobil
              alt={car.title}
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>

          {/* Detail Mobil */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{car.title}</h1>
            <p className="text-gray-600 text-lg">{car.description}</p>
            <div className="mt-6">
              <p className="font-medium text-xl">Harga: Rp{car.newPrice.toLocaleString()}</p>
            </div>

            {/* Fitur dan Spesifikasi */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Spesifikasi</h3>
              <ul className="list-disc ml-5 mt-2">
                <li><strong>Model:</strong> {car.model}</li>
                <li><strong>Category:</strong> {car.category}</li>
                <li><strong>Year:</strong> {car.year}</li>
                <li><strong>Engine:</strong> {car.engine}</li>
                <li><strong>Transmission:</strong> {car.transmission}</li>
                {/* Anda bisa menambahkan spesifikasi lainnya di sini */}
              </ul>
            </div>

            {/* Tombol untuk kembali */}
            <div className="mt-6">
              <a href="/" className="btn-primary bg-blue-500 text-white px-6 py-2 rounded-full">
                Kembali ke Daftar Mobil
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetail;
