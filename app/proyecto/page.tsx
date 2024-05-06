"use client";

import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <main>
      <nav className="fixed top-0 left-0 w-full py-4 px-8 bg-black text-white z-50 flex items-center justify-between opacity-90 bg-black border-b-2 border-white">
        <div className="flex items-center">
          <Link href="/">
            <img src="/img/logo.png" alt="Logo" className="h-8 mr-4" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`lg:flex items-center space-x-6 text-sm ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className="hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/publicidad"
              className="hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              PUBLICIDAD
            </Link>
          </li>
          <li>
            <Link
              href="/diseno-de-audio"
              className="hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              DISEÑO DE AUDIO
            </Link>
          </li>
          <li>
            <Link
              href="/cine"
              className="hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              CINE Y TV
            </Link>
          </li>
          <li>
            <Link
              href="/pana"
              className="hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              ¿QUÉ ES UN PANA?
            </Link>
          </li>
          <li>
            <Link
              href="/los-panas"
              className="hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              LOS PANAS DE EL PANA
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              CONTACTA AL PANA
            </Link>
          </li>
        </ul>
      </nav>

      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <Head>
          <title>GOMITAS TOZTECAS</title>
          <meta name="description" content="GOMITAS TOZTECAS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="max-w-4xl w-full mx-auto">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/XXYlFuWEuKI?si=MwlfMN5B58OV3v6s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h1 className="text-yellow-400 text-4xl font-bold mt-8">
            GOMITAS TOZTECAS
          </h1>
          <h2 className="text-yellow-400 text-lg font-semibold">TOZTECAS</h2>
          <p className="text-gray-700 text-lg mt-4">
            Director: Rodrigo Pérez Galicia Música Original y Diseño de audio:
            Rafael &quot;EL PANA&quot; Pérez
          </p>
        </div>
      </div>
    </main>
  );
}
