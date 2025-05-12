import '../footer/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer'>
          <div className='footer-icon'>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-telegram"></i>
              <i class="fa-brands fa-x-twitter"></i>
          </div>

          <ul className='footer-lists'>
            <li> <Link to = "/">Audio Description</Link> </li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jops</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Refferences</li>
            <li>Cooperate Information</li>
            <li>Contact Us</li>
          </ul>

          <div className='copyright-text'>
              <p>&copy; 2025 MeasPovz</p>
          </div>
        </div>
    </div>
  )
}

export default Footer