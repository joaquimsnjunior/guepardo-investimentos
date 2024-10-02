import Image from 'next/image'
import React from 'react'
import SpCity from '../assets/sp-city.jpg'
import Pri from '../assets/pri.png'
import Ambima from '../assets/Selo-Gestao-Recursos.png'


export default function Footer() {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src={SpCity}
          alt="São Paulo City"
          className="absolute inset-0 h-full w-full object-cover"
          quality={100}
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500"> Telefone </span>

              <a href="#" className="block text-2xl font-medium text-gray-900 sm:text-3xl">
                +55 (11) 3103-9200 <br />
                +55 (11) 3079-5998
              </a>
              <span className="text-xs uppercase tracking-wide text-gray-500"> Email: </span>

              <a href="#" className="block text-sm font-medium text-gray-900 hover:opacity-75 sm:text-1xl">
                contato@guepardoinvest.com.br
              </a>
              <span className="text-xs uppercase tracking-wide text-gray-500"> Trabalhe com a Guepardo </span> <br />
              <span className="text-xs uppercase tracking-wide text-gray-500"> Email </span>
              <a href="#" className="block text-sm font-medium text-gray-900 hover:opacity-75 sm:text-1xl">
                trabalheconosco@guepardoinvest.com.br
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Av. Brigadeiro Faria Lima, 3015 – 8º andar Conj. 81</li>
              <li>São Paulo – SP – 01452-000</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li className='flex gap-x-4'>
                <Image 
                  src={Pri}
                  alt="Signatory PRI"
                  width={140}
                  height={140}
                  quality={100}
                />
                <Image 
                  src={Ambima}
                  alt="Ambima Regulamentação"
                  width={140}
                  height={140}
                  quality={100}
                />
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-gray-900">Mapa do site</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> Quem Somos </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> Investir </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> Compliance </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> Cartas da Gestora </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Fundos</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO INSTITUCIONAL FIC FIA </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO VALOR INSTITUCIONAL FIC FIA </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO FIC FIA </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO LONG BIAS RV FIM RL </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO XP SEG PREV FIC FIM </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO 70 PREV FIE TIPO 2 FIC FIM </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO 100 FIE TIPO 2 PREV FIC FIM </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO ICATU 100 PREV TIPO 1 FIC FIM </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75"> GUEPARDO CSHG FIC FIA </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75"> Politica de privacidade </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2024. Guepardo Asset Management. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
