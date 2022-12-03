import { Link, NavLink } from 'react-router-dom'
import { MdOutlineShoppingBag } from 'react-icons/md'

const Header = () => {
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
                    <div >
                        <MdOutlineShoppingBag className='nav-store' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header