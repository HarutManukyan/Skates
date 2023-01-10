import App from "../App";
import HomePage from "../homepage/HomePage";
import AllCart from "../pages/AllCart";
import Auth from "../pages/Auth";
import Blog from "../pages/Blog";
import CustService from "../pages/CustService";
import History from "../pages/History";
import Shop from "../pages/Shop";
import SignUp from "../pages/SignUp";
import SingleProduct from "../SingleProduct";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
    
                path: 'home-page',
                element: <HomePage />
            },
            {
                path: 'single-product',
                element: <SingleProduct />
            },
            {
                path: 'history',
                element: <History />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'clients',
                element: <CustService />
            },
            {
                path: 'store',
                element: <Shop />
            },
            {
                path: 'auth',
                element: <Auth />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'allcart',
                element: <AllCart />
            }
        ]
    }
]

export default routes