import React from 'react'
import { BsPeopleFill } from 'react-icons/bs'

const About = () => {
    return (
        <div className='w-screen flex justify-center items-center'>
            <div className='flex w-full max-w-[1250px] justify-center flex-col items-center sm:w-[90%] mt-6'>
                <h1 className='text-center text-slate-950 text-4xl font-display font-extrabold'>Sobre nós</h1>
                <div className='max-w-[800px] sm:w-[90%] flex flex-col gap-7 mt-3'>
                    <p className='font-display font-semibold text-[18px]'>
                        Bem-vindo à nossa empresa de vendas de imóveis, fundada por um empreendedor experiente que tem mais de 15 anos de experiência no mercado imobiliário!
                    </p>
                    <p className='font-display font-semibold text-[18px]'>
                        Desde o início, nossa empresa foi construída com uma missão em mente: fornecer um serviço excepcional aos nossos clientes e ajudá-los a realizar seus sonhos imobiliários.
                    </p>
                    <p className='font-display font-semibold text-[18px]'>
                        Nosso fundador, com sua vasta experiência, trouxe consigo uma abordagem única e inovadora para o setor imobiliário. Ele entende que cada cliente tem necessidades e objetivos diferentes, e está comprometido em fornecer atendimento personalizado e orientação especializada para cada um.
                    </p>
                    <p className='font-display font-semibold text-[18px]'>
                        Nosso time de corretores imobiliários é altamente qualificado e está comprometido em fornecer um serviço excepcional em cada transação. Trabalhamos com diligência para garantir que cada cliente tenha uma experiência positiva e seja bem-sucedido em alcançar seus objetivos.
                    </p>
                    <p className='font-display font-semibold text-[18px]'>
                        Além disso, nossa empresa é conhecida por sua integridade e compromisso com a excelência. Temos uma presença forte no mercado imobiliário e um histórico comprovado de sucesso.
                    </p>
                    <p className='font-display font-semibold text-[18px]'>
                    Então, se você está procurando comprar ou vender uma propriedade, pode contar conosco para fornecer orientação especializada e atendimento personalizado para ajudá-lo a alcançar seus objetivos. Entre em contato conosco hoje mesmo para saber como podemos ajudá-lo a realizar seus sonhos imobiliários.
                    </p>


                </div>

            </div>
        </div>
    )
}

export default About
