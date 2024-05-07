"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Project from "@/components/Project/Project";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <main>
      <Nav />
      {/* HEADER */}

      <div className="bg-yellow-400 py-28 text-center text-black">
        <p className="text-6xl">LOS PANAS DE EL PANA</p>
      </div>
      <section className="bg-black py-8">
        <h2 className="text-2xl text-center mb-4 py-12">
          <span className="text-yellow-500 ">PROYECTOS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"></div>
      </section>
      <section className="bg-black">
        <div className="container mx-auto py-8">
          <h2 className="text-4xl text-center  mb-4 text-white">
            <span className="text-white tracking-widest">CONTACTO</span>
          </h2>
          <div className="my-20">
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-4 font-bold border-2 border-white bg-black"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-4 font-bold border-2 border-white bg-black"
                />
              </div>
              <textarea
                className="w-full p-4 mb-4 font-bold border-2 border-white h-80 bg-black"
                placeholder="Tu mensaje"
              />
              <button
                className="w-full p-2 text-white font-black border-2 bg-black border-white
                hover:bg-white hover:text-black transition duration-300 ease-in-out
              "
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
