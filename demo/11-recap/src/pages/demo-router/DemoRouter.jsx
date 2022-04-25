import React, { useEffect } from 'react'
import TitlePage from '../../components/title-page/TitlePage';
import { Typography } from '@mui/material';
import { Outlet, Link, useParams, useNavigate, useSearchParams } from "react-router-dom";

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

export const DemoRouterNotFound = () => (
    <div>
        <Typography
        component='h3'
        variant='h5'
        >
            Router Not Found
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

export const DemoQuery = () => {
    
    const [queryParams, setQueryParams] = useSearchParams()

    const firstname = queryParams.get('firstname')
    const lastname = queryParams.get('lastname')

    console.log(queryParams);

    // useEffect(() => {
    //     setQueryParams()
    // })

   return (
    <div>
        <Typography
        component='h3'
        variant='h5'
        >
            Vos recherches sont : {firstname} ♥ {lastname}
        </Typography>
    </div>
)
}

export const DemoRouterParam = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    // besoin du useEffect une une fonction pour faire la redirection
    useEffect(() => {
        // if (!Number(id))) {
        // if (isNaN(id))) {
        if (!/^[0-9]+$/.test(id)) {
            navigate('error', {replace: true})
        }
    }, [id])

    return (
    <div>
        <Typography
        component='h3'
        variant='h5'
        >
            Param {id}
        </Typography>
    </div>
)
}

function DemoRouter() {
  return (
      <main>
        <TitlePage content='Demo de Reak router'/>
        <ul>
            <li><Link to='choicea' >Choix A</Link></li>
            <li><Link to='choiceb' >Choix B</Link></li>
            <li><Link to='' >routerHome</Link></li>
            <li><Link to='/' >Maison</Link></li>
        </ul>
        <ul>
            <li><Link to='param/17' >Param OK</Link></li>
            <li><Link to='param/mia' >Param Error</Link></li>
        </ul>
        <ul>
            <li><Link to='query/?firstname=Jérôme&lastname=Mia'>Query firstname: jerome - lastname: mia</Link></li>
        </ul>
            <Outlet />
      </main>

  )
}

export default DemoRouter