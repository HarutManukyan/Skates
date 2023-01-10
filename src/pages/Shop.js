import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setProduct } from "../redux/slices/productSlice"

import instance from '../api/axios'

const Shop = () => {
    const [skates, setSkates] = useState([])
    const [longs, setLongs] = useState([])

    useEffect(() => {
        instance.get('longboards')
            .then(res => setLongs(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        instance.get('skateboards')
            .then(res => setSkates(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getNewProduct = (id, img, price) => {
        dispatch(setProduct({id, img, price}))
        navigate('/single-product')
    }

    return (
        <div className="shop-container">
            <div className="shop-items">
                <div className="shop-title">
                    НОВЫЕ <br />
                    СКЕЙТ- <br />
                    БОРДЫ
                </div>
                {
                    skates.map(({id, img, price, show}) => (
                        <div onClick={() => getNewProduct(id, img, price)} key={id} className="shop-item">
                            <div className="item-img-div">
                                <img className="item-img" src={img} alt='shop item'/>
                            </div>
                            <div className="item-tite">
                                Ваш товар
                            </div>
                            <div className="item-price">
                                {price} $
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="shop-items">
                <div className="shop-title">
                    НОВЫЕ<br />
                    ЛОНГ-<br />
                    БОРДЫ
                </div>
                {
                    longs.map(({id, img, price}) => (
                        <div onClick={() => getNewProduct(id, img, price)} key={id} className="shop-item">
                            <div className="item-img-div">
                                <img className="item-img" src={img} alt='shop item'/>
                            </div>
                            <div className="item-tite">
                                Ваш товар
                            </div>
                            <div className="item-price">
                                {price} $
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shop