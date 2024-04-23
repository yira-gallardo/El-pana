"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

export default function Pana() {
  return (
    <main>
      <Nav />
      {/* HEADER */}
      <div className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left py-12">
            <h2 className="text-4xl  text-yellow-500 ">PANA.</h2>
            <p className="text-lg leading-relaxed">
              ['Pa. na]<br></br>
              Sustantivo femenino y masculino <br></br>
              Anglicismo bastardizado de la palabra inglesa "partner"
              (compañero)Ej:"Voy a tomarme unos tragos con los panas…” Sinónimos
              : Amigo, Amigo íntimo, Compañero, Compinche, Camarada, Brother,
              Parcero. En Venezuela se está canalizando de forma oficial la
              sustitución de la palabra PANAMERICANO por algún otro vocablo,
              pues los Americanos (estadonidenses) ya no son panas.
            </p>
            <br></br>
            <h2 className="text-2xl pb-3.5">
              Cosas que puedes esperar de los Panas:
            </h2>
            <p className="text-lg leading-relaxed">
              Que te rescaten rascao (Ebrio) de alguna cómica (Bochorno) y te
              lleven pa’ tu casa, que te soporten despechao, que lleguen al
              sitio donde chocaste con una patrulla de Baruta, que te presten
              plata (dinero) cuando estás pelando (En la quiebra), que te
              brinden una birra (Cerveza) cuando más la necesitas, que te dejen
              quedar en su apartamento cuando estás en otra ciudad, que te
              presenten a una hermanita o primita chévere (Simpática), que te
              guarden paquetes de compras que hiciste por internet, que te
              presten el carro cuando tienes un cuadre con un culito (Una cita
              con una muchacha), que te cuadren al culito, que hayas chocado el
              carro de tu hermano y te encubran, que hayas vomitado la casa de
              tu hermana y te vuelva a encubrir, que hayas metido la pata y no
              te echen paja (Delaten), que se te olviden las entradas de un
              concierto y te las busquen, que te ayuden con las tareas de la
              universidad, que te consigan una entrevista de trabajo, que
              abandones a tu pareja y te den posada, que te consigan entradas
              pa’ ese juego o concierto que tanto quieres ver, etc…
            </p>
          </div>
          <div className="mt-10">
            <img
              className=" object-center "
              src="/img/pana.jpeg"
              alt="Imagen de la sección"
            />
          </div>
          <p className="text-lg leading-relaxed pt-12">
            Rafael Ángel Pérez Valcárcel es un Pana al que le gusta hacer música
            y que decidió dedicarse a hacer lo que le gusta en vez de trabajar
            en una oficina persiguiendo aumentos y promociones. A veces
            produce​j​ingles, a veces produce música para series y películas, a
            veces produce música de otros artistas, a veces toca con bandas.
          </p>
          <p className="text-lg leading-relaxed pt-12">
            Rafael Ángel Pérez Valcárcel es un Pana feliz.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
