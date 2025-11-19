import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Collections from './pages/Collections'
import Lookbook from './pages/Lookbook'
import Story from './pages/Story'
import Sustainability from './pages/Sustainability'
import Journal from './pages/Journal'
import Stores from './pages/Stores'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Press from './pages/Press'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="collections" element={<Collections />} />
      <Route path="lookbook" element={<Lookbook />} />
      <Route path="story" element={<Story />} />
      <Route path="sustainability" element={<Sustainability />} />
      <Route path="journal" element={<Journal />} />
      <Route path="stores" element={<Stores />} />
      <Route path="careers" element={<Careers />} />
      <Route path="contact" element={<Contact />} />
      <Route path="press" element={<Press />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
