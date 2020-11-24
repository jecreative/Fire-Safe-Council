import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

// CSS
import './App.css'

// Layout Components
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

// Utilities
import ScrollToTop from './utils/ScrollToTop'

// Pages
import Home from './components/pages/HomePage/Home'
import FireEvents from './components/pages/CurrentFiresPage/CurrentFires'
import About from './components/pages/AboutPage/About'
import Mission from './components/pages/MissionPage/Mission'
import WhoWeAre from './components/pages/WhoWeArePage/WhoWeAre'
import Resources from './components/pages/ResourcesPage/Resources'
import WildFirePrep from './components/pages/ResourcesPage/WildFirePrep'
import Contact from './components/pages/ContactPage/Contact'
import Blog from './components/pages/BlogPage/Blog'
import PostDetailPage from './components/pages/BlogPage/PostDetailPage'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'
//* Admin Pages
// import Login from './components/admin/Login'
// import AdminDashboard from './components/admin/AdminDashboard'

// Fixes proxy when running npm run build
import axios from 'axios'

// axios.defaults.baseURL =
//   'https://us-central1-uc-firesafecouncil.cloudfunctions.net/api'
axios.defaults.baseURL = 'http://localhost:1337'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/mission' exact component={Mission} />
        <Route path='/who-we-are' exact component={WhoWeAre} />
        <Route path='/resources' exact component={Resources} />
        <Route path='/fire-incidents' exact component={FireEvents} />
        <Route path='/preparing-for-wildfire' exact component={WildFirePrep} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/posts/:id' exact component={PostDetailPage} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/404' component={NotFoundPage} />

        {/* Admin Routes */}
        {/* <Route path='/login' component={Login} />
        <Route path='/admin-dashboard' component={AdminDashboard} /> */}
        <Redirect to='/404' />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
