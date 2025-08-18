import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Routing_main from './Components/Routing_main'
import Footer from './Components/Othercomponents/Home/Footer'
import { useLocation } from 'react-router'
import { AuthProvider } from './Components/Use Context/AuthContext'

function App() {
  const location = useLocation();
const hideLayout = ['/dashbaord', '/userdetails', '/login', '/register'];
const shouldHide = hideLayout.some(path => location.pathname.startsWith(path));
  return (
    <>
      <AuthProvider>
        {!shouldHide && <Navbar />}
        <Routing_main />
        {!shouldHide && <Footer />}
      </AuthProvider>
    </>
  )
}

export default App
