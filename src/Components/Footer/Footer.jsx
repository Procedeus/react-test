import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className="container__footer">
        <h2>Footer Portfolio</h2>
        <div className="links__footer">
          <a href=""><FaLinkedin  className='link__icon' /> Linkedin</a>
          <a href=""><FaFacebookSquare className='link__icon' /> Facebook</a>
          <a href=""><FaInstagramSquare className='link__icon' /> Instagram</a>
        </div>
        <p>&copy; churesnai </p>
      </div>
    </footer>
  )
}

export default Footer