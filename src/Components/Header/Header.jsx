import React from 'react'
import './header.css'
import foto from './../../assets/foto.png'
import {RiMedal2Fill} from 'react-icons/ri'
import {AiFillFolderAdd} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'

function Header() {
  return (
    <header>
      <div className="container container__header">
        <h4>Bem Vindo(a) ao meu</h4>
        <h2>Portfolio</h2>
        <h4>Aproveite e me contrate!</h4>
        <div className="header__perfil">
          <div className="header__perfil-image">
            <img src={foto} alt="" />
          </div>
          <div className="header__perfil-experiencia">
            <div className="header__perfil-grid">
            <article className='experiencia__content'>
              <RiMedal2Fill className="experiencia__content-icon" />
              <h4>Experiência</h4>
              <small>000</small>
            </article>

            <article className='experiencia__content'>
            <AiFillFolderAdd className="experiencia__content-icon" />
              <h4>Projetos</h4>
              <small>000</small>
            </article>

            <article className='experiencia__content'>
            <FaUsers className="experiencia__content-icon" />
              <h4>Clientes</h4>
              <small>000</small>
            </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Veritatis exercitationem quo impedit cum in expedita 
               distinctio. Laboriosam ad saepe rerum tempora, perspiciatis
                odio. Voluptas cumque at sapiente suscipit. Facere, eos.</p>
            <a href="" className='btn'>Curriculo</a>
            <a href="" className='btn'>Contate me</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header