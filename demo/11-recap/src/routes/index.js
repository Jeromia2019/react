import About from '../pages/about/About';
import Error404 from '../pages/errors/Error404';
import Home from '../pages/home/Home';

export const appRoute = [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: '*', element: <Error404 />}
]