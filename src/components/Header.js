import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'

import { setCart } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, userSelector } from '../redux/slices/userSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    const navbar = [
        {
            id: 1,
            text: 'главная',
            to: 'home-page',
        },
        {
            id: 2,
            text: 'магазин',
            to: 'store',
        },
        {
            id: 3,
            text: 'наша история',
            to: 'history',
        },
        {
            id: 4,
            text: 'блог',
            to: 'blog',
        },
        {
            id: 5,
            text: 'обслуживание клиентов',
            to: 'clients',
        }
    ]

    const user = useSelector(userSelector)

    const logOut = () => {
        dispatch(setUser({}))
        navigate('/auth')
    }

    return (
        <header className="header">
            <div className='header-container'>
                <Link to='/home-page' className='logo'>
                    скейтер
                </Link>
                <div className='navbar'>
                    {
                        navbar.map(({id, text, to}) => (
                            <NavLink className='nav-link' key={id} to={to}>
                                {text}
                            </NavLink>
                        ))
                    }
                    <div className='nav-link'>
                         {user.id ? `Баланс: ${user.money}` : 'Баланс: 0'}
                    </div>
                    <div >
                        <MdOutlineShoppingBag onClick={() => dispatch(setCart(true))} className='nav-store' />
                    </div>
                    <div >
                        {
                            user.id ? <div onClick={logOut} className='nav-link'>Log out</div> : <BiUserCircle onClick={() => navigate('/auth')} className='nav-store' />
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header