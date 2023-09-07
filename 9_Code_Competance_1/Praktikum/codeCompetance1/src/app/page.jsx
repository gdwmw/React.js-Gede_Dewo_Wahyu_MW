"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nDescription: ${formData.description}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <header className="container px-5 mx-auto py-4 flex items-center justify-between">
        <section className="flex items-center justify-center">
          <Image src={require("@/assets/images/lens.png")} alt="Logo.png" width={40} height={40} />
          <h1 className="font-bold text-2xl text-white mb-1 ml-2">
            /d,<span className="text-gray-400">Wo</span>
          </h1>
        </section>

        <nav className="flex gap-8 items-center font-bold justify-center">
          <a href="#home" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-400">
            About
          </a>
          <a href="#contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </nav>
      </header>

      <main id="home" className="container px-5 mx-auto">
        <section className="grid grid-cols-2 py-28">
          <h1 className="text-white text-7xl font-bold flex items-center justify-center">
            HELLO
            <br />
            EVERYONE
          </h1>
          <p className="text-white text-lg max-w-[600px]">
            Selamat Datang di /d,Wo Photography! Saya adalah para penggemar seni fotografi yang siap mengabadikan momen-momen berharga dalam hidup
            Anda. Setiap gambar adalah kisah yang tak terlupakan, dan saya hadir untuk menjadikannya abadi. Mari berkelana bersama saya dalam dunia
            cahaya dan bayangan yang penuh keindahan.
          </p>
        </section>

        <section className="flex justify-center items-center py-10">
          <Image src={require("@/assets/images/images.jpg")} alt="Images.jpg"></Image>
        </section>

        <section className="py-24 grid grid-cols-2">
          <div className="flex items-center justify-center">
            <Image src={require("@/assets/images/me.png")} alt="Me.png" width={300}></Image>
          </div>
          <div id="about" className="flex flex-col justify-center">
            <h1 className="text-white text-7xl font-bold">ABOUT ME</h1>
            <p className="text-white text-lg mt-5 max-w-[600px]">
              Saya adalah seniman visual yang penuh hasrat dalam dunia fotografi. Sudah bertahun-tahun saya menjelajahi keindahan alam, momen spesial,
              dan ekspresi manusia melalui lensa kamera. Dengan setiap foto yang saya ambil, saya berusaha untuk mengabadikan keindahan dan keunikan
              dalam setiap momen. Fotografi adalah bahasa saya, dan melalui karya-karya saya, saya berharap dapat berbicara langsung ke hati Anda.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="container px-5 mx-auto">
        <section className="grid grid-cols-2 py-5">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-7xl font-bold">CONTACT</h1>
            <p className="text-white max-w-[300px] mt-8 mr-28">
              Jl. Jendral Sudirman No. 123
              <br />
              <br />
              Kecamatan Menteng
              <br />
              <br />
              Jakarta Pusat
              <br />
              <br />
              Indonesia
              <br />
              <br />
              022-3897-9339-97
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex mt-[98px] flex-col gap-4">
            <div className="flex items-center gap-5">
              <input
                type="text"
                name="firstName"
                id="firstname"
                placeholder="First Name"
                className="p-2 w-[240px] text-white bg-gray-800/80 outline-none border border-black focus:border focus:border-white"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                id="lastname"
                placeholder="Last Name"
                className="p-2 w-[240px] text-white bg-gray-800/80 outline-none border border-black focus:border focus:border-white"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="p-2 w-[500px] text-white bg-gray-800/80 outline-none border border-black focus:border focus:border-white"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              id="desc"
              placeholder="Description"
              className="p-2 w-[500px] text-white h-[200px] bg-gray-800/80 outline-none border border-black focus:border focus:border-white"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <button
              type="submit"
              className="text-white mx-1 py-3 px-5 border-2 border-white text-sm mr-auto hover:border-gray-400 hover:text-gray-400"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>

        <section className="mt-20">
          <div className="flex items-center justify-center gap-10 pt-8">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-gray-400 text-3xl" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-gray-400 text-3xl" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-400 text-3xl" />
            </a>
          </div>
          <p className="text-center text-gray-400 pb-10 pt-5">&copy; 2023 Gede Dewo Wahyu M.W. All Rights Reserved.</p>
        </section>
      </footer>
    </>
  );
}
