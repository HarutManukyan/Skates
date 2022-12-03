import App from "../App";
import HomePage from "../homepage/HomePage";
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
            }
        ]
    }
]

export default routes