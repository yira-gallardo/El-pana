import Link from "next/link";

export default function Project() {
  return (
    <Link href="/" className="relative h-[300px]">
      <div
        className="absolute w-full h-full bg-cover bg-center w-full relative z-0"
        style={{
          backgroundImage: "url('/img/img-3.jpg')",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-300 flex flex-col justify-end items-start p-4">
        <h3 className="font-bold text-xl">Proyecto 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </Link>
  );
}
