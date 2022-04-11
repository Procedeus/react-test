import React from 'react'
import './repository.css'
import image1 from './../../assets/image-1.jpg'
import image2 from './../../assets/image-2.jpg'
import image3 from './../../assets/image-3.jpg'
function Repository() {
  return (
    <section className="container">
        <h2>Meus Projetos</h2>
        <h4>Venha conhecer meus projetos</h4>
        <div className="container__repository">
            <div className="repository__item">
                <img src={image1} alt="" />
                <div className="item__text">
                    <h3>Projeto 1</h3>
                    <p>Descrição projeto :)</p>
                    <a href="" className='btn btn-color'>GitHub</a>
                </div>
            </div>
            <div className="repository__item">
                <img src={image2} alt="" />
                <div className="item__text">
                    <h3>Projeto 2</h3>
                    <p>Descrição projeto :)</p>
                    <a href="" className='btn btn-color'>GitHub</a>
                </div>
            </div>
            <div className="repository__item">
                <img src={image3} alt="" />
                <div className="item__text">
                    <h3>Projeto 3</h3>
                    <p>Descrição projeto :)</p>
                    <a href="" className='btn btn-color'>GitHub</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Repository