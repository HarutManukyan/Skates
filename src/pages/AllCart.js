import { useSelector } from "react-redux"

import { totalSelector, userSelector } from '../redux/slices/userSlice'
import instance from '../api/axios'
import { useNavigate } from "react-router-dom"

const AllCart = () => {
    const user = useSelector(userSelector)
    const total = useSelector(totalSelector)

    const navigate = useNavigate()

    const buy = () => {
        instance.patch(`users/${user.id}`, {money: user.money - total})
            .catch(err => console.log(err))

        instance.patch(`users/${user.id}`, {ordered: user.cart})
            .catch(err => console.log(err))

        instance.patch(`users/${user.id}`, {cart: []})
            .then(() => navigate('/home-page'))
            .catch(err => console.log(err))
    }

    const deleteItem = (id) => {
        instance.patch(`users/${user.id}`, {cart: user.cart.filter(item => item.id !== id)} )
    }

    return (
        <div className="allcart">
            <div className="allcart-title">
                Моя корзина
            </div>
            {
                user.cart[0] ? user.cart.map(({id, img, price, amount}) => (
                    <div key={id} className="allcart-shop-item">
                        <div className="item-img-div">
                            <img className="allcart-item-img" src={img} alt='shop item'/>
                        </div>
                        <div className="items-div">
                            <div className="item-tite">
                                Ваш товар
                            </div>
                            <div className="item-price">
                                {price} $
                            </div>
                            <div>
                                Количество: {amount}
                            </div>
                        </div>
                        <div className="delete-btn-div">
                            <button onClick={() => deleteItem(id)} className="delete-btn">
                                Удалить
                            </button>
                        </div>
                    </div>
                )) : <div className="empty">Корзина пуста</div>
            }
            <div className="total-info">
                <div className="total-price">
                    Сумма: <span>{total}</span>
                </div>
                <div className="buy-btn-div">
                    <button onClick={buy} className="buy-btn">
                        Buy all
                    </button>
                </div>
            </div>
            <div className="allcart-title">
                Заказы
            </div>
            {
               user.ordered[0] ? user.ordered.map(({id, img, price, amount}) => (
                    <div key={id} className="allcart-shop-item">
                        <div className="item-img-div">
                            <img className="allcart-item-img" src={img} alt='shop item'/>
                        </div>
                        <div className="items-div">
                            <div className="item-tite">
                                Ваш товар
                            </div>
                            <div className="item-price">
                                {price} $
                            </div>
                            <div>
                                Количество: {amount}
                            </div>
                        </div>
                    </div> 
                )) : <div className="empty">Заказов нет</div>
            }
        </div>
    )
}

export default AllCart