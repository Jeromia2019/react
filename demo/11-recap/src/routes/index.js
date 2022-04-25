import About from '../pages/about/About';
import DemoRouter, { DemoQuery, DemoRouterA, DemoRouterB, DemoRouterInit, DemoRouterNotFound, DemoRouterParam } from '../pages/demo-router/DemoRouter';
import Error404 from '../pages/errors/Error404';
import Home from '../pages/home/Home';

// to : App.js
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
                        {
                                path:'param/:id',
                                element: <DemoRouterParam />
                        },
                        {
                                path:'query',
                                element: <DemoQuery />
                        },
                        {
                                path:'*',
                                element: <DemoRouterNotFound />
                        },
                ] 
        },
        { path: '*', element: <Error404 /> },
]