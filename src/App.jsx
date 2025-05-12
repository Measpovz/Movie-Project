import NavBar from "./components/navbar/NavBar"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import Player from "./pages/playerpage/Player";


const App = () => {
  return (
    <Router>
      <div className="container">
          
          <NavBar/>
          
          <Routes>
            <Route path="/" element= {<Homepage />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/player/:id" element={<Player/>}/>

          </Routes>
           

      </div>
    </Router>
  )
}

export default App;



// path="/player/:id":

// This is the URL pattern that React Router will match.

// :id is a route parameter — it acts as a placeholder for a dynamic value (like a player ID).

// For example, URLs like /player/7, /player/42, or /player/john-doe would all match this route.