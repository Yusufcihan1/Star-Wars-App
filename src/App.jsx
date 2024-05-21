import './App.css'
import { GeneralContextProvider } from './GeneralContext'
import Detail from './components/Detail'
import Planets from './components/Planets'
import {Routes , Route} from 'react-router-dom'


function App() {
 
  return (
    <GeneralContextProvider>
      <Routes>
        <Route path='/' element={<Planets/>}/>
        <Route path='/detail' element={ <Detail/>}/>
      </Routes>
    </GeneralContextProvider>
  )
}

export default App
