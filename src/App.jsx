import Logo from './assets/images/logo.svg';


export const App = () => {
  return (
    <div className='w-full h-full'>
      <nav className='w-full h-20 bg-white'>
        <div className='2xl:w-10/12 xl:w-10/12 h-full m-auto px-4 flex items-center justify-between'>
          <img src={Logo} className='w-32' alt='Logo Missura Networks' title='Logo Missura Networks'/>
          <ul className='flex gap-3'>
            <li>SOBRE</li>
            <li>SERVIÇOS</li>
            <li>CONTATO</li>
          </ul>
        </div>
      </nav>

      <header className='w-full  bg-gradient-to-r from-cyan-600 bg-[#2E72A4] h-96'>
        <div className='m-auto h-full 2xl:w-10/12 xl:w-10/12 px-4 flex items-center justify-between'>
          <div className='h-full flex flex-col justify-end'>
          </div>
          <div className='w-full m-auto flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-yellow-400'>Criação de Sites Profissionais</h1>
            <h1 className='text-4xl text-yellow-400'>Criação de Landing Pages</h1>
            <h1 className='text-4xl text-yellow-400'>Gestão de Tráfego Com Anúncios no Google</h1>
          </div>
        </div>
      </header>

      <main className='m-auto w-full my-12'>
        <div className='text-4xl 2xl:w-10/12 xl:w-10/12 px-4 font-bold text-yellow-400'>Sobre:
        </div>
        <p className='2xl:w-10/12 xl:w-10/12 px-4 my-5'>A Missura Networks é especializada em criação de sites profissionais, landing pages e gestão de tráfego pago com anúncios no Google.</p>
        
        <h1 className='text-4xl 2xl:w-10/12 xl:w-10/12 text-center px-4 mt-20 font-bold text-yellow-400'>Serviços:
        </h1>

        <h2 className='text-4xl 2xl:w-10/12 xl:w-10/12 px-4 mt-4 text-[#2E72A4]'>Criação de Sites:</h2>
        <p className='2xl:w-10/12 xl:w-10/12 px-4 my-5'>Sites profissionais, responsivos e customizados conforme a necessidade de cada cliente.</p>
        
        <h2 className='text-4xl 2xl:w-10/12 xl:w-10/12 px-4 mt-20 text-[#2E72A4]'>Criação de Landing Pages:</h2>
        <p className='2xl:w-10/12 xl:w-10/12 px-4 my-5'>Landing Pages para seu negócio/marca.</p>
        
        <h2 className='text-4xl 2xl:w-10/12 xl:w-10/12 px-4 mt-20 text-[#2E72A4]'>Gestão de Tráfego:</h2>
        <p className='2xl:w-10/12 xl:w-10/12 px-4 my-5'>Gerenciamos o tráfego dos anúncios no Google.</p>
      </main>

      <section className='w-full bg-gradient-to-r from-cyan-600 bg-[#2E72A4] h-52'>
        <div className='mx-6 h-full 2xl:w-10/12 xl:w-10/12 flex justify-between'>
          <div className='h-full flex flex-col'>
          </div>
          <div className='w-full m-auto flex flex-col'>
            <p className='text-2xl text-yellow-400'>Contato:</p>
            <p className='text-xl text-yellow-400'>Tel.: (19) 97102-7173</p>
            <p className='text-xl text-yellow-400'>Email: mmissura@gmail.com</p>
          </div>
        </div>
      </section>
      

      <footer className="text-center bg-gradient-to-r from-cyan-600 bg-[#2E72A4] text-sm">
          <p className='mt-20 text-white p-8'>&copy; Copyright 2024 by Missura Networks<br />
           CNPJ: 53.447.302/0001-79</p>
        </footer>
    </div>
  );
};

export default App;
