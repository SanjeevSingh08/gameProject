import Image from 'next/image'
import Navbar from './componentsfile/Navbar'
import Hero from './componentsfile/Hero'
import SearchBar from './componentsfile/SearchBar'

import Services from './componentsfile/Services'
import Screen from './componentsfile/Screen'
import AboutGames from './componentsfile/AboutGames'
import Pricing from './componentsfile/Pricing'
import Testimonials from './componentsfile/Testimonials'
import Features from './componentsfile/Features'
import Featured from './componentsfile/Featured'

import GamePosts from './componentsfile/GamePosts'
export default function Home() {
  return (
    <>
    
   <Navbar/>
   <Hero/>
   <SearchBar/>
<Services/>
<Screen/>
<AboutGames/>
<Pricing/>
<Testimonials/>

<Featured/>
<GamePosts/>


   </>
  )
}
