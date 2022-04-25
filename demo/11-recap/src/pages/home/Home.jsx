import React from 'react'
import TitlePage from '../../components/title-page/TitlePage';
import imgHome from './images/home.jpg'

function Home() {
  return (
      <main>
          <TitlePage content='Home' />
          <img src={imgHome} alt="homer simpson"/>
      </main>
  )
}

export default Home