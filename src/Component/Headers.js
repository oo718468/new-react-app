import React from 'react';
import admin from '../img/admin.png'
import logo from '../img/svg.png';
import '../style.css';
import globe from '../img/globe.png';

function Headers() {
  return (
    <section className='header-section max-w-6xl m-auto '> 
     <div className='header-top'>
        <div className='container  flex justify-between  m-auto mt-3  '>
                <div className='header-logo'>
                    <img src={logo} />
                </div>

                <div className='header-search '>
                    <input type={Text} placeholder='Поиск....' className='input w-96  outline-none border-solid border-2 text-base border-sky-400 rounded-s-lg p-1'/>
                    <button className='button bg-sky-500 text-white  w-30 text-sm  rounded-r-lg p-2  outline-none'>ИСКАТ</button>
                </div>

                <div className='header-component flex gap-7'>
                    <img  className='globe w-6 h-6 ' src={globe}/>
                    <h1>logo</h1>
                    <h1>logo</h1>
                    <h1>logo</h1>
                    <h1>logo</h1>
                    <h1>logo</h1>
                  
                </div>                
         </div>
          
          <div className='header-bottom mt-8  '>
              <div className='container-bottom  flex justify-between pb-2 drop-shadow-2xl  cursor-pointer'>
                    <h1>все категории</h1>
                    <h1>Скидки на Ramadan</h1>
                    <h1>Новости</h1>
                    <h1>Новинки</h1>
                    <h1>Скидки</h1>
                    <h1>Книги</h1>
                    <h1>Телефоны и гаджеты</h1>
                    <h1>Телевизоры</h1>
                  
              </div>
          </div>
     </div>
   </section>
  )
}

export default Headers