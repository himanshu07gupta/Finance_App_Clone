import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Signup } from "./pages/signup"
import {Signin} from "./pages/signin"

function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                  <Route path="/signup" element={<Signup></Signup>}></Route>
                  <Route path="/signin" element={<Signin></Signin>}></Route>

              </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
