import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar.js'
import Header from '../components/Header.js'
import About from '../components/About.js'
import Service from '../components/Service.js'
import Animal from '../components/animal.js'
import Member from '../components/Member.js'
import Clien from '../components/Clien.js'
import Contact from '../components/Contact.js'
import Visiting from '../components/Visiting.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Navbar/>

    <Header/>

    <About/>

    <Service/>

    <Animal/>

    <Visiting/>

    <Member/>

    <Clien/>

    <Contact/>
    </>
  )
}
