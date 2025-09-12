import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Gallery from './pages/gallery.jsx'
import EventCalendar from './pages/event-calendar.jsx'
import EventDetail from './pages/event-details.jsx'
import Feedback from './pages/feedback.jsx'
import SignIn from './pages/sign-in.jsx'
import Contact from './pages/contact.jsx'
function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/event-calendar" element={<EventCalendar />} />
  <Route path="/event-details" element={<EventDetail />} />
  <Route path="/feedback" element={<Feedback />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </>
  )
}

export default App
