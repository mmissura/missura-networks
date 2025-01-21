import Logo from './assets/images/logo.svg';

import { BsWhatsapp } from 'react-icons/bs';
import { SiGoogleads } from 'react-icons/si';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaCode } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";


import { TitlePage } from './components/TitlePage';
import { CardInline } from './components/CardInline';

export const App = () => {
  const getYear = new Date().getFullYear();
  return (
    <div className='w-full h-full'>
      <nav className='w-full h-28 bg-white'>
        <div className='2xl:w-10/12 xl:w-10/12 h-full m-auto px-4 flex items-center justify-between'>
          <img
            src={Logo}
            className='w-36'
            alt='Logo Missura Networks'
            title='Logo Missura Networks'
          />
          <section className='mt-10'>
            <a
              href='https://wa.me/5519971027173'
              target='_blank'          
              className='bg-green-700 text-white py-3 px-4 flex justify-center 
          items-center gap-3 rounded-xl mb-12 cursor-pointer'
          rel='noopener noreferrer'
            >
              <BsWhatsapp /> Fale conosco
            </a>
          </section>
        </div>
      </nav>

      <div className='bg-slate-800'>

        <div className='bg-image1 mb-2'>
          <div className='w-full bg-black bg-opacity-30 py-20'>
            <div className='w-full flex flex-col justify-center items-center px-4'>
              <TitlePage
                title='A Missura Networks'
              />

              <CardInline>
                <p className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-center 
              xl:text-center lg:text-center text-center font-bold mb-10'>
                  Temos como objeto ajudar as empresas a alcançarem melhores
                  resultados online através do marketing digital.
                </p>

                <ul className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 
              justify-between items-center gap-10 m-auto h-full'>

                  <li className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-start 
              xl:text-start lg:text-start text-center font-light'>

                    Desenvolvemos sites profissionais e customizados, landing pages
                    e gestão de tráfego com anúncios patrocinados  no Google, Meta e Tiktok.

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

        <main className='m-auto w-full my-2'>

          <div className='bg-image2 mb-2'>
            <div className='w-full bg-black bg-opacity-70 py-20'>
              <div className='w-full flex flex-col justify-center items-center px-4'>
                <TitlePage
                  title='Criação de sites'
                  icon={<FaCode />}
                />

                <CardInline>

                  <p className='text-white 2xl:text-2xl lg:text-2xl text-xl 2xl:text-center 
              xl:text-center lg:text-center text-center font-bold mb-10'>
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


          <div className='bg-image3 mb-2'>
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
                      Aumente a taxa de conversão e gere mais oportunidades de negócios com uma landing page bem projetada.<br />
                    </li>
                  </ul>

                </CardInline>
              </div>
            </div>
          </div>


          <div className='bg-image mb-2'>
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
                      Gestão de tráfego com anúncios patrocinados no Google, Meta e Tiktok. <br />
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

      </div>

      <CardInline>
        <h1
          className='text-xl text-center 2xl:text-3xl xl:text-3xl lg:text-3xl 
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
          rel='noopener noreferrer'
        >
          <BsWhatsapp /> Fale conosco
        </a>
      </section>


      <footer className='text-center bg-gradient-to-r from-cyan-600 bg-[#2E72A4] text-sm'>
        <div className='flex flex-cols-2 justify-beetween items-center
         2xl:flex-col-2 xl:flex-col-2 lg:flex-col-2 text-center p-4 flex-col-reverse'>

       

          <div className='text-start flex justify-center items-center'>
            <p className='my-2 text-white p-2 text-center'>
              Copyright &copy;  {getYear} Missura Networks. <br />CNPJ: 53.447.302/0001-79.
            </p>
          </div>

          <div className='2xl:flex 2xl:flex-col-3 xl:flex xl:flex-col-3 lg:flex lg:flex-col-3 
          flex-col-2 justify-between items-center text-center m-auto gap-8 text-white text-md'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href="https://instagram.com/missuranetworks">

              <p className='flex justify-start items-center gap-2 my-2 mx-1'>
                <BsInstagram /> @missuranetworks
              </p>

            </a>

            <a
              target='_blank'
              rel='noopener noreferrer'
              href="https://www.facebook.com/profile.php?id=61566022891643">

              <p className='flex justify-start items-center gap-2 my-2'>
              <CiFacebook size={19}/> missuranetworks
              </p>

            </a>

            <p className='flex justify-start items-center gap-2 my-2 mx-1'>
              <a
                href='https://wa.me/5519971027173'
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col-2 justify-between items-center gap-2'
              >
                <BsWhatsapp />  (19) 97102-7173
              </a>

            </p>
            </div>
          
          

        </div>
      </footer>

    </div>
  );
};

export default App;

