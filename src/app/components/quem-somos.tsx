import React from 'react'

export default function QuemSomos() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-14 lg:gap-20">
          {/* Content */}
          <div className="flex flex-col gap-14 lg:gap-20">
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Quem somos
              </h2>
              <p className="flex-1">
                Fundada em 2004 e baseada em São Paulo, a Guepardo Investimentos é uma gestora
                 de recursos independente que possui uma reconhecida estratégia de investimentos
                  de longo prazo.
                Especializada em investimentos de renda variável e focada em empresas Brasileiras
                 de capital aberto, a Guepardo é uma gestora orientada em valor, que busca
                  o retorno absoluto.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-semibold flex-1">
                Missão 
              </h2>
              <p className="flex-1">
                Proporcionar aos nossos clientes a melhor relação “Risco x Retorno”, 
                investindo a longo prazo em excelentes empresas merecedoras destes recursos.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <h2 className="text-3xl md:text-5xl font-bold flex-1">
                Visão
              </h2>
              <p className="flex-1">
                Líderes em rentabilidade de longo prazo e referência em investimentos
                 de renda variável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
