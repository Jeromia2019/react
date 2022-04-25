import React from 'react'
import TitlePage from '../../components/title-page/TitlePage';
import { Typography } from '@mui/material';
import { Outlet, Link } from "react-router-dom";

export const DemoRouterInit = () => (
    <div>
        <Typography
        component='h3'
        variant='h5'
        >
            Router Home
        </Typography>
    </div>
)

export const DemoRouterA = () => (
    <div>
        <Typography
        component='h3'
        variant='h5'
        >
            Choix A - Jérôme
        </Typography>
    </div>
)


export const DemoRouterB = () => (
    <div>
        <Typography
        component='h3'
        variant='h5'
        >
            Choix B - Mia
        </Typography>
    </div>
)

function DemoRouter() {
  return (
      <main>
        <TitlePage content='Demo de Reak router'/>
        <ul>
            <li><Link to ='choicea' >Choix A</Link></li>
            <li><Link to ='choiceb' >Choix B</Link></li>
            <li><Link to ='' >routerHome</Link></li>
            <li><Link to ='/' >Maison</Link></li>
        </ul>
            <Outlet />
      </main>

  )
}

export default DemoRouter