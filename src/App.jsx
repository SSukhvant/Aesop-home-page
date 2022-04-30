import './App.css';
import { Navbar } from './components/index';
import { About, Footer, Home } from './containers';

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Footer/>
    </div>
  )
}

export default App
