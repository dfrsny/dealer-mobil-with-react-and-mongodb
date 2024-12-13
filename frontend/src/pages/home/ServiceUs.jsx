import React from "react";
import { FaCar, FaTools, FaExchangeAlt, FaHandshake, FaRegCreditCard, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "Penjualan Mobil",
    description: "Menawarkan berbagai macam mobil baru dan bekas berkualitas untuk memenuhi kebutuhan Anda.",
    icon: <FaCar className="text-blue-600 text-4xl mb-4" />
  },
  {
    title: "Layanan Perawatan",
    description: "Menyediakan layanan perawatan berkala untuk menjaga kondisi mobil Anda tetap optimal.",
    icon: <FaTools className="text-blue-600 text-4xl mb-4" />
  },
  {
    title: "Layanan Tukar Tambah",
    description: "Memudahkan Anda untuk melakukan trade-in atau tukar tambah mobil lama dengan yang baru.",
    icon: <FaExchangeAlt className="text-blue-600 text-4xl mb-4" />
  },
  {
    title: "Pembiayaan dan Leasing",
    description: "Bekerja sama dengan lembaga keuangan terkemuka untuk memberikan opsi kredit dan leasing kendaraan.",
    icon: <FaRegCreditCard className="text-blue-600 text-4xl mb-4" />
  },
  {
    title: "Jaminan Garansi",
    description: "Setiap pembelian mobil dilengkapi dengan program garansi untuk memberikan ketenangan bagi Anda.",
    icon: <FaShieldAlt className="text-blue-600 text-4xl mb-4" />
  },
  {
    title: "Pelayanan Pelanggan",
    description: "Kami siap melayani dan membantu Anda dengan tim pelayanan pelanggan yang ramah dan profesional.",
    icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />
  }
];

const ServiceUs = ({ id }) => {
    return (
    <section id={id}>
        <div className="bg-gray-100 py-12">
            <div className="max-w-screen-lg mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
                Our Services
                </h1>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div 
                    key={index} 
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
                    >
                    {service.icon}
                    <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {service.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
    );
  };
  

export default ServiceUs;
