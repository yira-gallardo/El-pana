"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

export default function Contacto() {
  return (
    <main>
      <Nav />
      {/* HEADER */}
      <section className="bg-black">
        <div className="container mx-auto py-8 pt-24">
          <h2 className="text-5xl text-center font-bold mb-4 text-white">
            <span className="text-yellow-400 tracking-widest">CONTACTO</span>
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
