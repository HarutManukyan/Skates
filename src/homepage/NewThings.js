import { useEffect, useState } from "react"
import instance from '../api/axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProduct } from "../redux/slices/productSlice"

const NewThings = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        instance.get('/new')
            .then(res => setProductData(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getNewProduct = (id, img, price) => {
        dispatch(setProduct({id, img, price}))
        navigate('/single-product')
    }

    return (
        <div className="newthings">
            <div className="newthings-upper">
                <div className="newthings-upper-left">
                    <div>
                        <div className="homepage-title-green">
                            НОВЫЕ
                        </div>
                        <div className="homepage-title-black">
                            ПОСТУ-<br />
                            ПЛЕНИЯ
                        </div>
                        <div className="newthings-upper-btn-div">
                            <button className="newthings-upper-btn">
                                СМОТРЕТЬ
                            </button>
                        </div>
                    </div>
                </div>
                <div className="newthings-upper-right">
                    <img alt='img' src="https://static.wixstatic.com/media/1e47b2_ab0af0b792c54ff19237dfffef6d1657.png/v1/fill/w_600,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1e47b2_ab0af0b792c54ff19237dfffef6d1657.png"/>
                </div>
            </div>
            <div className="newthings-lower">
                {
                    productData.map(({id, img, price}) => (
                        <div onClick={() => getNewProduct(id, img, price)} className="newthings-img-div" key={id}>
                            <img className="newthings-img" src={img}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewThings