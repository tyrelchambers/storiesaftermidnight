import React from 'react'
import './Footer.scss';
import HBImg from '../../assets/PartnerStampRed.png';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={HBImg} className="partner-icon" alt=""/>
      <p className="social-intro">Catch me on social media!</p>
      <ul className="social-list">
        <li className="social-item">
          <a href="https://www.instagram.com/storiesaftermidnight" target="_blank"  rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>

        <li className="social-item">
          <a href="https://twitter.com/S_A_Midnight" target="_blank"  rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
      <p className="social-intro dim">Stories After Midnight is an affliate partner with <a href="https://humblebundle.com" target="_blank"  rel="noopener noreferrer">Humble Bundle</a></p>
    </footer>
  )
}
