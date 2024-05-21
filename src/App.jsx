import './App.css'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './containers/itemListContainers/itemListContainer'
function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Renzo Ferreira'} />
    </>
  )
}

export default App
