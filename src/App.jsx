import Logo from './assets/images/logo.svg';
import { BsWhatsapp } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import { SiGoogleads } from 'react-icons/si';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaCode } from "react-icons/fa";
import Image from './assets/images/ads1.png';

import { TitlePage } from './components/TitlePage';
import { CardInline } from './components/CardInline';

export const App = () => {
  return (
    <div className='w-full h-full'>
      <nav className='w-full h-28 bg-white'>
        <div className='2xl:w-10/12 xl:w-10/12 h-full m-auto px-4 flex items-center justify-between'>
          <img
            src={Logo}
            className='w-40'
            alt='Logo Missura Networks'
            title='Logo Missura Networks'
          />
         <section className='mt-10'>
        <a
          href='https://wa.me/5519971027173'
          target='_blank'
          className='bg-green-700 text-white py-3 px-4 flex justify-center 
          items-center gap-3 rounded-xl mb-12 cursor-pointer'
        >
          <BsWhatsapp /> Fale conosco
        </a>
      </section>
        </div>
      </nav>

      <div className='bg-image1 mb-12'>
        <div className='w-full bg-black bg-opacity-30 py-20'>
          <div className='w-full flex flex-col justify-center items-center px-4'>
              <TitlePage
                title='A Missura Networks'
              />

            <CardInline>
              <p className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-bold mb-10'>
              Temos como objeto ajudar as empresas a alcançarem melhores
                resultados online através do marketing digital.
              </p>

            <ul className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 
              justify-between items-center gap-10 m-auto h-full'>

              <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>
                
                Desenvolvemos sites profissionais e customizados, landing pages
                e gestão de tráfego patrocinado com anúncios no Google.
                   
              </li>
              <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>
              Planejamos e criamos estratégias personalizadas para cada tipo de negócio, ajudamos sua empresa a
                decolar na internet.<br />
                
              </li>
              </ul>

            </CardInline>
          </div>
        </div>
      </div>

      <main className='m-auto w-full my-12'>

      <div className='bg-image2 mb-12'>
          <div className='w-full bg-black bg-opacity-70 py-20'>
            <div className='w-full flex flex-col justify-center items-center px-4'>
              <TitlePage
                title='Criação de sites'
                icon={<FaCode />}
              />

            <CardInline>

            <p className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-bold mb-10'>
              Sites profissionais responsivos e customizados
                  conforme a necessidade de cada cliente.
              </p>
                          
              <ul className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 
              justify-between items-center gap-10 m-auto h-full'>

              <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>
                   Aumente a visibilidade de sua empresa 
                   com um site personalizado e destaque-se no mercado.<br />
                   
              </li>
              <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>
              Ajudamos sua marca a alcançar o sucesso desejado através de páginas
                  personalizadas e eficientes. 
              </li>
              </ul>
              
            </CardInline>
          </div>
        </div>
      </div>


        <div className='bg-image3 mb-12'>
          <div className='w-full bg-black bg-opacity-30 py-20'>
            <div className='w-full flex flex-col justify-center items-center px-4'>
              <TitlePage
                title='Landing pages'
                icon={<HiOutlineDesktopComputer />}
              />

              <CardInline>

              <ul className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 
              justify-between items-center gap-10 m-auto h-full px-4'>

              <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>
                 Landing Pages responsivas e customizadas
                  conforme a necessidade de cada cliente. <br /> 
                   
              </li>
              <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>
              Aumente a taxa de conversão de visitantes em clientes com uma landing page bem projetada.<br />
              </li>
              </ul>

              </CardInline>
            </div>
          </div>
        </div>


        <div className='bg-image mb-12'>
          <div className='w-full bg-black bg-opacity-30 py-20'>
            <div className='w-full flex flex-col justify-center items-center px-4'>
              <TitlePage
                title='Gestão de tráfego'
                icon={<SiGoogleads />}
              />

              <CardInline>

              <ul className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 
              justify-between items-center gap-10 m-auto h-full px-4'>

              <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>
                  Gestão de tráfego com anúncios patrocinados no Google. <br />
                  Exiba seus anúncios para as pessoas certas, no lugar certo e na hora certa.<br />
                  Faça a diferença e saia na frente da concorrência.
                   
              </li>
              <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>
              No Brasil, 93% da população utilizam o Google para fazer buscas por serviços ou produtos.<br />
                  Ajudamos a aumentar suas vendas com campanhas bem estruturadas e completas.
              </li>
              </ul>

              </CardInline>
            </div>
          </div>
        </div>


      </main>

      <CardInline>
        <h1
          className='text-[#2f72a4] text-xl text-center 2xl:text-3xl xl:text-3xl lg:text-3xl 
           my-10 mx-4 font-bold'
        >
          Quer divulgar sua empresa ou produto e atrair mais clientes?<br />
          Entre em contato e solicite um orçamento.
        </h1>
      </CardInline>

      <section className='flex justify-center items-center'>
        <a
          href='https://wa.me/5519971027173'
          target='_blank'
          className='bg-green-700 text-white py-3 px-10 flex justify-center items-center gap-3 rounded-xl mb-12 cursor-pointer'
        >
          <BsWhatsapp /> Fale conosco
        </a>
      </section>

      <footer className='text-center bg-gradient-to-r from-cyan-600 bg-[#2E72A4] text-sm'>
        <p className='mt-6 text-white p-8'>
          &copy; Copyright 2024 Missura Networks
          <br />
          CNPJ: 53.447.302/0001-79
        </p>
      </footer>
    </div>
  );
};

export default App;

{
  /* <div className='w-full'>
                <h2
                  className='text-green-400 text-center 
                  2xl:text-4xl 2xl:text-start xl:text-4xl lg:text-4xl text-4xl font-bold'
                >
                  <div className='text-center flex justify-center items-center gap-2'>
                    <SiGoogleads />Gestão de tráfego
                  </div>

                </h2>
                <div className='mt-10 text-white 2xl:text-3xl lg:text-3xl text-3xl text-center font-bold'>
                  <p>Gestão de tráfego com anúncios no Google.</p>
                </div>
              </div>


              <div>
                <img src={Image} className='w-full' alt='Imagem negócios na internet' title='Imagem negócios na internet' />
              </div> */
}
