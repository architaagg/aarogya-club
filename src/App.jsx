import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoAreWe from './components/WhoAreWe'
import WhatWeDo from './components/WhatWeDo'
import WhyJoinUsnew from './components/WhyJoinusnew'
import Footer from './components/Footer'
import Team from './components/Team'
import Professors from './components/Professors'
import Timeline from './components/Timeline'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainpage from './components/Mainpage'
import Gallery from './components/Gallery'


const router=createBrowserRouter(
  [
    {
      path:"/",
      element: 
        <div >
          <Navbar />
          <Mainpage />
          <Footer />
        </div>
    },
    {
      path:"/team",
      element: 
      <div>
        <Navbar />
        <Team />  
      </div>
      
    },
    {
      path:"/gallery",
      element: 
      <div>
        <Navbar />
        <Gallery />
      </div>
      
    }
  ]
)

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
