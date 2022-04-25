import About from '../pages/about/About';
import DemoRouter, { DemoRouterA, DemoRouterB, DemoRouterInit } from '../pages/demo-router/DemoRouter';
import Error404 from '../pages/errors/Error404';
import Home from '../pages/home/Home';

export const appRoute = [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { 
                path: 'router', 
                element: <DemoRouter />, 
                children: [
                        {
                                index: true, 
                                element: <DemoRouterInit />
                        },
                        {
                                path:'choicea',
                                element: <DemoRouterA />
                        },
                        {
                                path:'choiceb',
                                element: <DemoRouterB />
                        },
                ] 
        },
        { path: '*', element: <Error404 /> },
]