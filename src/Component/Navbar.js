import React from 'react';
import "../style/style.css";
import Logo from "../img/div.logo.png";
import shop from "../img/market.png";
import exit from "../img/exit.png";
import { useState } from 'react';


export default function Navbar() {

const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <div className="container">
        <div className='navbar_logo1'>
                <img src={Logo} />
            </div>
        <div className='navbar'>
            <div className='navbar_logo'>
                <img src={Logo} />
            </div>
            <div className='navbar_input'>
                <input className='input' type='text' placeholder='Поиск событий и мест'/>
            </div>

            <div className='shop_cart'>
                <img src={shop} /> 
                <span>Корзина</span>              
            </div>

            <div className='exit_cart'>
                 <span>Войт</span>
                <img src={exit}/>           
            </div>

        </div>

        <div className='navbar_bottom'>
           <div className='navbar_menu'>
                <div className='language_item'>
                    <span>Язик:</span>
                    <h3>Русский </h3>
                </div>

                <div className={`navbar_right${navbarOpen ? 'show-menu' : ''}`}>
                {/* this is code humburger menu */}
                    <div className='humburger'>
                        <button className='toggle' onClick={() => setNavbarOpen((prev) => !prev)}>
                            {navbarOpen ? 'close' : 'open'}
                        </button>
                    </div>   

                {/* this is code humburger menu */}           
                    <h3>ВСЕ</h3>
                    <h3>КОНЦЕРТЫ</h3>
                    <h3>САМАРКАНД</h3>
                    <h3>ХОККЕЙ</h3>
                    <h3>КУЛЬТУРНЫЕ МАРОПРИЯТИЯ</h3>
                    <h3> ДЕТЯМ</h3>
                    <h3>ТЕАТРЫ, ТАШКЕНТ</h3>
                    <h3> РАЗНОЕ</h3>
                    <h3>МЕСТА</h3>
                </div>
           </div>
        </div>
    </div>
  )
}
