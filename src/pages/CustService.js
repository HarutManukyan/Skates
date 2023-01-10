import { useState } from "react"

const CustService = () => {
    const [faq, setFaq] = useState(false)

    return (
        <div className="history-container">
            <div className="history-content">
                <div className="history-content-text">
                    ЖДЕМ <br />
                    ВАС
                </div>
                <div className="history-content-img-div">
                    <img className="history-content-img" src="https://static.wixstatic.com/media/1e47b2_14f0d160357b4553b3ad8bda275f07a3.jpg/v1/fill/w_795,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_14f0d160357b4553b3ad8bda275f07a3.jpg"/>
                </div>
            </div>
            <div className="cust-service-info">
                <div className="adress-info">
                    <div className="cust-service-adress">
                        <div className="adress-title">
                            Наш адрес
                        </div>
                        <ul className="adress-list"> 
                            <li className="adress-list-item">
                                ул. Арбат, 1а, Москва, 
                            </li>
                            <li className="adress-list-item">
                                119019, Россия
                            </li>
                            <li className="adress-list-item">
                                Телефон +7 (495) 000-00-00
                            </li>
                        </ul>
                    </div>
                    <div className="cust-service-adress">
                        <div className="adress-title">
                            Часы работы
                        </div>
                        <ul className="adress-list"> 
                            <li className="adress-list-item">
                                ПН–ПТ: 11:00–18:30 
                            </li>
                            <li className="adress-list-item">
                                СБ: 11:00–17:00
                            </li>
                            <li className="adress-list-item">
                                ВС: 12:30–16:30 
                            </li>
                        </ul>
                    </div>
               </div>
               <div className="question-info">
                    <div className="cust-service-adress">
                        <div className="adress-title">
                            Есть вопрос?
                        </div>
                        <ul className="adress-list"> 
                            <li className="adress-list-item">
                                Пишите на info@mysite.ru
                            </li>
                            <li className="adress-list-item">
                                или заполните форму:
                            </li>
                        </ul>
                    </div>
                    <form className='question-form'>
                        <div className="quest-input-div">
                            <input className="quest-input" placeholder="Имя"/>
                            <input className="quest-input" placeholder="Эл. почта"/>
                            <input className="quest-input" placeholder="Телефон"/>
                        </div>
                        <div>
                            <input className="quest-input-text" placeholder="Добавте сообщение"/>
                        </div>
                    </form>
                    <div className="quest-btn-div">
                        <button className="quest-btn">
                            Отправить 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustService