import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Logo() {
  return (
    <div className="w-1/2">
        <h1 >Pokedéx</h1>
    </div>
  )
}

function SearchBar() {
  return (
    <div className="font-mono w-1/2">
        <h5>SearchBar</h5>
    </div>
  )
}

function Header() {
  return (
    <div className="w-3/5 flex justify-center">
      <div>
        <Logo />
        <SearchBar />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  )
}
