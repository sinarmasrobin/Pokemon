import React, { useState, useEffect } from 'react'
import Pokemons from '../components/organisms/pokemons'
import Header from '../components/organisms/header'

function Home() {
  useEffect(() =>
  {
    console.log("home effect")
  }, [])
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl grow w-auto my-8 mx-4">
        <Header />
        <Pokemons 
          limit={20}
          offset={0}
        />
      </div>
    </div>
  )
}

export default Home;
