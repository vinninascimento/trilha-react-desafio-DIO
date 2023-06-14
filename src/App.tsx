import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Feed } from './pages/Feed'
import { SignUp } from './pages/SignUp'
import { AuthContextProvider } from './context/auth'

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
      </Router>
  )
}

export default App
