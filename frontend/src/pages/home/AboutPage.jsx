import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-lg mx-auto px-6 space-y-12">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
          About Us
        </h1>

        {/* Sejarah Dealer */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Sejarah Dealer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Dealer kami didirikan pada tahun 2000 dengan tujuan menyediakan
            layanan otomotif yang handal dan terpercaya bagi masyarakat. Dengan
            perjalanan panjang di industri ini, kami telah membangun reputasi
            yang kuat, mencapai berbagai pencapaian, dan mendapatkan kepercayaan
            dari pelanggan.
          </p>
        </section>

        {/* Visi dan Misi */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Visi dan Misi</h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Visi:</strong> Menjadi dealer otomotif terkemuka yang memberikan
            layanan terbaik dan pengalaman yang luar biasa bagi pelanggan.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Misi:</strong> Menyediakan kendaraan berkualitas dengan layanan
            yang ramah, profesional, dan responsif, serta membangun hubungan jangka
            panjang dengan pelanggan.
          </p>
        </section>

        {/* Tim dan Kepemimpinan */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Tim dan Kepemimpinan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Kami memiliki tim profesional yang dipimpin oleh manajer berpengalaman
            dalam industri otomotif. Setiap anggota tim berdedikasi untuk
            memberikan layanan terbaik bagi pelanggan kami.
          </p>
        </section>

        {/* Lokasi Dealer */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Lokasi Dealer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Kami berlokasi di Jl. Raya Otomotif No.10, Jakarta, dengan beberapa cabang
            di kota-kota besar lainnya.
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 mt-2 block"
          >
            Lihat di Google Maps
          </a>
        </section>

        {/* Keunggulan Dealer */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Keunggulan Dealer
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
            <li>Kualitas layanan yang profesional dan responsif</li>
            <li>Stok mobil terbaru dan beragam</li>
            <li>Reputasi yang terpercaya dalam penjualan mobil</li>
            <li>Promo menarik untuk setiap pembelian</li>
          </ul>
        </section>

        {/* Layanan yang Ditawarkan */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Layanan yang Ditawarkan
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
            <li>Penjualan mobil baru dan bekas</li>
            <li>Layanan perawatan dan perbaikan</li>
            <li>Layanan trade-in atau tukar tambah</li>
            <li>Pilihan leasing dan kredit kendaraan</li>
          </ul>
        </section>

        {/* Testimoni dan Reputasi */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Testimoni dan Reputasi
          </h2>
          <p className="italic text-gray-600 leading-relaxed">Sangat puas dengan layanan yang diberikan. Proses cepat dan mudah,
            mobil dalam kondisi prima! - Andi S.
          </p>
        </section>

        {/* Penghargaan dan Sertifikasi */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Penghargaan dan Sertifikasi
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Kami bangga telah menerima berbagai penghargaan atas dedikasi kami
            dalam pelayanan otomotif, termasuk Sertifikat Pelayanan Terbaik dari
            Asosiasi Dealer Nasional.
          </p>
        </section>

        {/* Komitmen terhadap Pelayanan Pelanggan */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Komitmen terhadap Pelayanan Pelanggan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Kami berkomitmen untuk memberikan layanan terbaik melalui program
            garansi, layanan purna jual, dan layanan darurat 24/7. Kepuasan
            pelanggan adalah prioritas utama kami.
          </p>
        </section>

        {/* Kontak */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Kontak</h2>
          <p className="text-gray-600 leading-relaxed">
            Nomor Telepon:{" "}
            <a
              href="tel:+6281234567890"
              className="text-blue-600 hover:underline"
            >
              +62 812-3456-7890
            </a>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Email:{" "}
            <a
              href="mailto:info@dealerotomotif.com"
              className="text-blue-600 hover:underline"
            >
              info@dealerotomotif.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
