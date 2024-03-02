import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Signup } from "./pages/signup"
import {Signin} from "./pages/signin"
import { Dashbord } from './pages/dashbord'
Dashbord

function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                  <Route path="/signup" element={<Signup></Signup>}></Route>
                  <Route path="/signin" element={<Signin></Signin>}></Route>
                  <Route path= "/dashbord" element={<Dashbord></Dashbord>}></Route>
              </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
