import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import ContactUs from "./components/ContactUs"
import Login from "./components/Login"

const App = () =>(
  <>
  <BrowserRouter>
  <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contact-us" element={<ContactUs/>} />
      <Route exact path="/login" element={<Login/>} />
  </Routes>
  </BrowserRouter>
  </>
)

export default App;
