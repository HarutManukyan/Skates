import { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showCartSelector, setCart } from '../redux/slices/productSlice'
import { setTotal, userSelector } from '../redux/slices/userSlice'

const Cart = () => {
    const [finalPrice, setFinalPrice] = useState(0)

    const showCart = useSelector(showCartSelector)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(userSelector)

    const seeAll = () => {
        dispatch(setCart(false))
    
        const totalAmount = user.cart.reduce((total, item) => {
             return (item.price * item.amount) + total
        }, 0)
        dispatch(setTotal(totalAmount))
        navigate('/allcart')
    }

    return (
        <>
            {   
                showCart && user.id &&
                <div className="cart">
                    <div className="cart-content">
                        <div className="cart-top">
                            <div className="cart-close-div">
                                <GrFormClose onClick={() => dispatch(setCart(false))} className="cart-close" />
                            </div>
                            <div className="cart-title">
                                Корзина
                            </div>
                        </div>
                        <div className='cart-bottom'>
                            {
                                user.cart.map(({id, img, price, amount}) => (
                                    <div className='cart-items'>
                                        <div className='cart-img-div'>
                                            <img src={img} className='cart-img'/>
                                        </div>
                                        <div className='cart-item-info'>
                                            <div className='cart-title'>
                                                Ваш товар
                                            </div>
                                            <div className='cart-price'>
                                                {price}$
                                            </div>
                                            <div className='cart-amount'>
                                                Количество: {amount}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className='cart-finals'>
                            <div onClick={seeAll} className='see-all'>
                                See all
                            </div>
                            <div className='total'>
                                Сумма
                            </div>
                            <div className='cart-final-price'>
                                 {
                                    user.cart.reduce((total, item) => (
                                        (item.price * item.amount) + total
                                    ), 0)
                                 }$
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart