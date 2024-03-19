import React from "react";
import Container from "../../components/container";

const Home = () => {
  return (
    <Container>
      <section className="bg-white p-4 rounded-lg max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full h-9 border-2 rounded-lg px-3 outline-none"
          type="text"
          placeholder="Digite o nome do carro..."
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-bold text-xl">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo Brasil
      </h1>
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg hover:scale-105 transition-all">
          <img
            className="w-full rounded-lg mb-2 max-h-72 "
            src="https://cdn.motor1.com/images/mgl/eXblW/s3/chevrolet-onix-sedan-2020.webp"
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Onix Turbo</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6 ">
              Ano 2024/2024 | 23.000km
            </span>
            <strong className="text-black font-medium text-xl">
              R$140.000,00
            </strong>
          </div>

          <div className="w-full h-px bg-slate-300 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-black">Manaus - AM</span>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Home;
