import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { useState } from 'react'

import instance from '../api/axios'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [emails, setEmails] = useState([])


    const getEmail = () => {
        instance.get('emails')
            .then(res => setEmails(res.data))

        const emailObj = {
            id: Math.round(Math.random() * 10000000),
            email,
        }

        instance.patch('emails', {emails: [...emails, emailObj]})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className='footer'>
                    <div className="footer-left">
                        <ul className="footer-list">
                            <li className="footer-list-item">
                                FAQ
                            </li>
                            <li className="footer-list-item">
                                Что нового
                            </li>
                            <li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="footer-list-item up">
                                <IoIosArrowDroprightCircle className='up-btn' /> Наверх
                            </li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <div className='footer-right-tite'>
                            Подпишитесь на новости
                        </div>
                        <div className='footer-right-input-div'>
                            <input onChange={(e) => setEmail(e.target.value)} placeholder='Добавте эл. почту' className='footer-right-input'/>
                            <button onClick={getEmail} className='footer-btn'> OK </button>
                        </div>
                        <div className='footer-contacts'>
                            <a  href='https://www.facebook.com/wix' target='blank' className='facebook'>
                                <BsFacebook className='contacts-link' />
                            </a>
                            <a href='http://www.twitter.com/wix' target='blank' className='twitter'>
                                <AiFillTwitterCircle className='contacts-link' />
                            </a>
                            <a href='https://instagram.com/wix/' target='blank' className='insta'>
                                <AiFillInstagram className='contacts-link' />
                            </a>
                            <div className='footer-text'>
                                ©2023 Магазин «Скейтер» создан на Wix.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Footer