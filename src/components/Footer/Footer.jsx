import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>At Tomato, our mission is simple: to provide our guests with an unforgettable dining experience. We strive to exceed expectations by offering mouthwatering dishes made from the freshest ingredients, paired with attentive service in a warm and inviting atmosphere.<br/>Experience the magic of Tomato for yourself. Join us for lunch, dinner, or a special event, and let us take you on a culinary journey you won't soon forget</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>

                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'> 
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+2348130252751</li>
                    <li>conttact@tomato.com</li>
                </ul>
            </div>

        </div>
        <hr/>
        <p className='footer-copyright'>Copyright © 2024 Tomato.com - All rights reserved.
 </p>
    </div>
  )
}

export default Footer