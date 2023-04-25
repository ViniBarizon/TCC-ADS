import { Outlet } from 'react-router-dom'
import './App.css'
import Toolbar from './components/ToolbarComponent'

function App() {

  return (
    <>
     <Toolbar />
     <Outlet />
    </>
  )
}

export default App
