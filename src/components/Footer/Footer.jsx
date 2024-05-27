import React from 'react'
import './Footer.css'
import logo from './../../images/logo-no-background.png'
import facebook from './../../images/facebook_icon.png'
import twitter from './../../images/twitter_icon.png'
import linkedin from './../../images/linkedin_icon.png'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
         <div className="footer-content-left">
             <img src={logo} alt="" className='w-25'/>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab molestiae maxime asperiores perspiciatis cumque, neque animi voluptatem, impedit minus ullam, tempore perferendis consequuntur libero voluptatum nemo veritatis. Mollitia, amet quidem.</p>
             <div className='footer-social-icons'>
               <img src={facebook} alt="" />
               <img src={twitter} alt="" />
               <img src={linkedin} alt="" />
             </div>
         </div>
         <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
         </div>
         <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+121 623221916</li>
                <li>contact@quickbite.com</li>
            </ul>
         </div>
       </div>
       <hr />
       <p className="footer-copyright">copyright 2024 QuickBite.com - All Right Reserved.</p>
    </div>
  )
}
