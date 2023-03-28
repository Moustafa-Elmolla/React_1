import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './copmonents/Layout/Layout'
import Home from './copmonents/Home/Home'
import Portfolio from './copmonents/Portfolio/Portfolio'
import About from './copmonents/About/About'
import Contact from './copmonents/Contact/Contact'

let routers = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    {index: true, element: <Home />},
    {path: 'portfolio', element: <Portfolio />},
    {path: 'about', element: <About />},
    {path: 'contact', element: <Contact />}
  ]
}])
function App() {
  return (
    <RouterProvider router= {routers} />
  )
}

export default App
