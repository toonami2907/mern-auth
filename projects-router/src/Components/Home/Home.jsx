import React from 'react'
import App from '../../App'
import Grid from './Grid'
import Feautes from './Feautes'
import Promo from './Promo'
import Homage from './Homage'

const Home = () => {
  return (
    <>
    <Homage/>
    {/* <Promo/> */}
    <Grid />
    <Feautes/>
    <Promo/>
    </>
  )
}

export default Home