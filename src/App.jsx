
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
import Layouts from './components/Layout/Layouts'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Error from './components/Error/Error'
import Portfolio from './components/Portfolio/Portfolio'


const router = createBrowserRouter([

  {path:"/",element:<Layouts />, children:[

    {index:true,element:<Home/>},

    {path:"about",element:<About/>},

    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<Error/>}




  ]}


])


function App() {

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
