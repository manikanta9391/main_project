import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import StartTest from './Components/StartTest'
import TestResponses from './Components/TestResponses'
const App=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/testresponses' element={<TestResponses/>} />
        <Route path='/starttest' element={<StartTest/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App