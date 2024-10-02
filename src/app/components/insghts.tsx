'use client'

import Image from "next/image"
import MarketMaker01 from "../assets/insgihts/podcast01.jpg"
import Vulcabras from "../assets/insgihts/vulcabras.jpg"
import PodCast02 from "../assets/insgihts/podcast02.jpg"
import NeoFeed from "../assets/insgihts/neofeed.jpeg"
import Allos from "../assets/insgihts/Aliansce.jpg"

export default function Insights() {

  return (
    <section>
    {/* Container */}
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <div className="text-center mb-12">
        {/* Title */}
        <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
          Insights & <span className="italic">News</span>
        </h2>
      </div>
      {/* Blog Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Blog Item */}
          <div className=" bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative h-80">
              <Image
                className="h-80 w-full object-cover"
                src={MarketMaker01}
                alt="Podcast do Gestor Octavio Magalhães"
              />
              <span className="absolute bottom-5 right-5 bg-gray-300 text-sm font-semibold px-2.5 py-2 rounded">
                PodCast: YouTube
              </span>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold mt-2">
                  BOLSA EM ALTA? COMO COMPRAR AS MELHORES AÇÕES
                </h2>
                <p>(com Guepardo Investimentos) | Os Economistas 134</p>
              </div>
              <button className="cursor-pointer h-14 w-14">
                <svg
                  className="h-14 w-14"
                 width="60"
                 height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                    fill="#174c75"
                    stroke="#174c75"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.625 30H39.3751"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Blog Item */}
          <div className="relative bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative h-80">
            <Image
                className="h-80 w-full object-cover"
                src={PodCast02}
                alt="Podcast do Gestor Octavio Magalhães"
              />
              <span className="absolute bottom-5 right-5 bg-gray-300 text-sm font-semibold px-2.5 py-2 rounded">
                Live: Necton Investimentos
              </span>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold mt-2">
                  LIVE | Octávio Magalhães | Gestão de Fundos de Investimentos em Ações
                </h2>
                <p>Processos e Desafios | Necton</p>
              </div>
              <button className="cursor-pointer h-14 w-14">
                <svg
                  className="h-14 w-14"
                 width="60"
                 height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                    fill="#174c75"
                    stroke="#174c75"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.625 30H39.3751"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog Item */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative h-72">
              <Image
                  className="cursor-pointer h-72 w-full object-cover"
                  src={Vulcabras}
                  alt="Podcast do Gestor Octavio Magalhães"
                />
              <span className="absolute bottom-5 right-5 bg-gray-300 text-sm font-semibold px-2.5 py-2 rounded">
                Valor Econômico 
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mt-2">
                Vulcabras: Guepardo Investimentos aumenta participação 
                para 10% das ações ordinárias
              </h2>
              <p className="text-gray-500">
                Aumentou a sua participação para 27.480.600 ações ordinárias, 
                o equivalente a 10% do total.
              </p>
            </div>
          </div>
          {/* Blog Item */}
          <div className=" bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative h-72">
              <Image
                  className="cursor-pointer h-72 w-full object-cover"
                  src={NeoFeed}
                  alt="Podcast do Gestor Octavio Magalhães"
                />
              <span className="absolute bottom-5 right-5 bg-gray-300 text-sm font-semibold px-2.5 py-2 rounded">
                NeoFeed: Waealth Management
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mt-2">
                Os segredos por trás do salto de oito vezes da Guepardo
                sobre Ibovespa
              </h2>
              <p className="text-gray-500">
                Além de bater o ibovespa, a gestora multiplicou por oito o total sob
                gestão e este e o melhor melhor resultado em seus 23 anos de história.
              </p>
            </div>
          </div>
          {/* Blog Item */}
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="relative h-72">
              <Image
                  className="cursor-pointer h-72 w-full object-cover"
                  src={Allos}
                  alt="Podcast do Gestor Octavio Magalhães"
                />
              <span className="absolute bottom-5 right-5 bg-gray-300 text-sm font-semibold px-2.5 py-2 rounded">
                SpaceMoney
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mt-2">
                Allos (ALOS3): Guepardo Investimentos eleva participação
              </h2>
              <p className="text-gray-500">
                A participação informada não visa a aquisição do controle de Allos, nem busca alterar sua administração,
                composição de controle ou o regular funcionamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}


