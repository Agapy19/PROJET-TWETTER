
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Feed from '../Components/Feed'
import Widget from '../Components/Widget'
import Profile from './Profile';
import axios from 'axios';
function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
      axios.get('https://my-json-server.typicode.com/amare53/twiterdb/Users')
          .then((res) => {
              console.log(res.data);
              setPersons(res.data)
          })
  }, [])
  return (

    <BrowserRouter>
    <div className="app">
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          {persons.map((info) =>
          <Route path="/profile" element={<Profile />} ></Route>
          )}
        </Routes>
        <Widget />
     

    </div>
    </BrowserRouter>
  )
}

export default App