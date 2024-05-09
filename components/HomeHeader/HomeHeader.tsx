"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function HomeHeader({ projects }: { projects: any[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <section className="relative z-0 text-[0px]">
      <Slider {...settings}>
        {projects.map((project: any, idx: number) => (
          <div key={idx}>
            <div className="min-h-screen w-full relative text-white">
              <div
                className="min-h-screen bg-cover bg-center w-full relative z-0 "
                style={{
                  backgroundImage: `url(${project.fields.image.fields?.file.url})`,
                }}
              ></div>
              <div className="absolute bottom-0 left-0 w-full h-full z-0 max-w-[800px] h-[300px] flex flex-col justify-center items-start p-10">
                <h2 className="font-bold text-4xl">{project.fields.title}</h2>
                <h3 className="text-2xl">{project.fields.subtitle}</h3>
                <Link
                  href={`/proyectos/${project.fields.slug}`}
                  className="hover:bg-white text-white font-bold py-2 px-4 rounded-full border-4 mt-4 inline-block text-lg hover:text-black"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
