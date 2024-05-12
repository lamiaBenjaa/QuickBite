import React, { useState } from 'react'
import Header from '../../components/Navbar/Header'
import HeroHeader from '../../components/hero-header/HeroHeader'
import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay'

export default function Home() {
  const[categorie ,setCategorie] = useState("All")
  return (
    <div>
    <Header/>
    <HeroHeader/>
    <ExploreMenu categorie={categorie} setCategorie={setCategorie}/>
    <FoodDisplay categorie={categorie}/>
    </div>
  )
}
