import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import instance from './api/axios'

import { productSelector } from './redux/slices/productSlice'
import { userSelector } from './redux/slices/userSlice'

const SingleProduct = () => {
    const [infoIsShown, setInfoIsShown] = useState(true)
    const [returnIsShown, setReturnIsShown] = useState(true)
    const [amount, setAmount] = useState(0)

    const {id, img, price} = useSelector(productSelector)
    const navigate = useNavigate()

    const user = useSelector(userSelector)

    const addToCart = () => {
        if(user.id === undefined){
            navigate('/auth')
        } else {
            const itemInfo = {
                id, img, price, amount
            }
            instance.patch(`users/${user.id}`, {cart: [...user.cart, itemInfo]})
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='single-product'>
            <div className='single-product-img-div'>
                <img src={img} className='single-product-img'/>
            </div>
            <div className='single-product-content'>
                <div className='single-product-title'>
                    Ваш товар
                </div>
                <div className='single-product-id'>
                    Артикул: {id}
                </div>
                <div className='single-product-price'>
                    {price} ₽
                </div>
                <div className='single-product-amount'>
                    Количество
                </div>
                
                <input onChange={(e) => setAmount(e.target.value)} placeholder='1' type='number' className='single-product-amount-selector'/>
                
                <div onClick={addToCart} className='single-product-add'>
                    <button  className='single-product-add-btn'>
                        Добавить в корзину
                    </button>
                </div>
                
                <div onClick={() => setInfoIsShown(!infoIsShown)} className='single-product-info-title'>
                    О товаре
                </div>
                {
                    infoIsShown &&
                    <div  className='single-product-info'>
                        Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.
                    </div>
                }
                <div onClick={() => setReturnIsShown(!returnIsShown)} className='single-product-return-title'>
                    О товаре
                </div>
                {
                    returnIsShown &&
                    <div  className='single-product-return'>
                        Это правила и условия возврата товара и денег. Расскажите посетителям, что нужно сделать, если они захотят вернуть товар и получить назад свои деньги. Четкая и ясная политика возврата — это хороший способ построить доверительные отношения с клиентами.
                    </div>
                }
            </div>
        </div>
    )
}

export default SingleProduct