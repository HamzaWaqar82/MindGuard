import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmergencyContact from './components/EmergencyContact'
import ProfilePage from './components/UserProfile'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes> <Route path='/contact' element={<EmergencyContact />} />
          <Route path='/user' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
