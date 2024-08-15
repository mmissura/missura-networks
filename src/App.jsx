import Logo from './assets/images/logo.svg';
import { BsWhatsapp } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
// import { SiGoogleads } from 'react-icons/si';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
// import Image from './assets/images/ads1.png';

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
          <ul className='flex gap-3'>
            <li>SOBRE</li>
            <li>SERVIÇOS</li>
            <li>CONTATO</li>
          </ul>
        </div>
      </nav>

      <div className='bg-image1 mb-12'>
        <div className='w-full bg-black bg-opacity-30 py-20'>
          <div className='w-full flex flex-col justify-center items-center px-4'>
            <TitlePage title='A Missura Networks' />

            <CardInline>
              <p className='text-white 2xl:text-2xl lg:text-2xl text-xl text-center font-bold'>
                Temos como objeto ajudar as empresas a alcançarem melhores
                resultados online através do marketing digital. <br />{' '}
                Desenvolvemos sites profissionais e customizados, landing pages
                e gestão de tráfego pago com anúncios no Google. <br /> Criamos
                estratégias personalizadas, conseguimos ajudar sua empresa a
                decolar.
              </p>
            </CardInline>
          </div>
        </div>
      </div>

      <div className='w-full  bg-gradient-to-r from-cyan-600 bg-[#2E72A4] h-96'>
        <div className='m-auto h-full 2xl:w-10/12 xl:w-10/12 px-4 flex items-center justify-between'>
          <CardInline>
            <h1 className='text-3xl text-yellow-400 flex justify-center items-center text-center'>
              <GiCheckMark />
              Criação de Sites Customizados e Responsivos
            </h1>
            <h1 className='text-3xl text-yellow-400 flex justify-center items-center text-center'>
              <GiCheckMark />
              Criação de Landing Pages Profissionais e Responsivas
            </h1>
            <h1 className='text-3xl text-yellow-400 flex justify-center items-center text-center'>
              <GiCheckMark />
              Gestão de Tráfego Com Anúncios no Google
            </h1>
          </CardInline>
        </div>
      </div>

      <main className='m-auto w-full my-12'>
        <div className='bg-image'>
          <div className='w-full bg-black bg-opacity-30 py-14'>
            <div className='w-full flex flex-col justify-center items-center px-4'>
              <TitlePage
                title='Criação de sites'
                icon={<HiOutlineDesktopComputer />}
              />

              <CardInline>
                <p className='text-white 2xl:text-2xl lg:text-2xl text-xl text-center font-bold'>
                  Sites profissionais e Landing Pages responsivas e customizadas
                  conforme a necessidade de cada cliente. <br /> Ajudamos sua
                  marca a alcançar o sucesso desejado através de páginas
                  personalizadas e eficientes.
                </p>
              </CardInline>
            </div>
          </div>
        </div>
      </main>

      <CardInline>
        <h1
          className='text-xl text-center 2xl:text-3xl xl:text-3xl lg:text-3xl 
           my-10 mx-auto font-bold'
        >
          Quer divulgar sua empresa ou produto e atrair mais clientes?<br></br>
          Entre em contato e solicite um orçamento
        </h1>
      </CardInline>

      <section className='flex justify-center items-center' id='contact'>
        <a
          href='https://wa.me/5519971027173'
          target='_blank'
          className='bg-green-700 text-white py-3 px-10 flex justify-center items-center gap-3 rounded-xl mb-12'
        >
          <BsWhatsapp /> Fale conosco
        </a>
      </section>

      <footer className='text-center bg-gradient-to-r from-cyan-600 bg-[#2E72A4] text-sm'>
        <p className='mt-20 text-white p-8'>
          &copy; Copyright 2024 by Missura Networks
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
