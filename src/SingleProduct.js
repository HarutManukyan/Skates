import { useState } from 'react'
import { useSelector } from 'react-redux'

import { productSelector } from './redux/slices/productSlice'

const SingleProduct = () => {
    const [infoIsShown, setInfoIsShown] = useState(true)
    const [returnIsShown, setReturnIsShown] = useState(true)

    const {id, img, price} = useSelector(productSelector)

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
                <div className='single-product-size'>
                    Размер
                </div>
                <select className='single-product-size-selector' onChange={(e) => console.log(e.target.value)}>
                    <option>
                        S
                    </option>
                    <option>
                        M
                    </option>
                    <option>
                        L
                    </option>
                </select>
                <div className='single-product-amount'>
                    Количество
                </div>
                
                <input placeholder='1' type='number' className='single-product-amount-selector'/>
                
                <div className='single-product-add'>
                    <button className='single-product-add-btn'>
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