import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

// Redux Store
import store from './store'
import { Provider } from 'react-redux'

// CSS
import './App.css'

// Layout Components
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

// Utilities
import ScrollToTop from './utils/ScrollToTop'

// Pages
import Home from './components/pages/HomePage/Home'
import About from './components/pages/AboutPage/About'
import Mission from './components/pages/MissionPage/Mission'
import WhoWeAre from './components/pages/WhoWeArePage/WhoWeAre'
import Resources from './components/pages/ResourcesPage/Resources'
import WildFirePrep from './components/pages/ResourcesPage/WildFirePrep'
import Contact from './components/pages/ContactPage/Contact'
import Blog from './components/pages/BlogPage/Blog'
import PostDetailPage from './components/pages/BlogPage/PostDetailPage'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/mission' exact component={Mission} />
          <Route path='/who-we-are' exact component={WhoWeAre} />
          <Route path='/resources' exact component={Resources} />
          <Route
            path='/preparing-for-wildfire'
            exact
            component={WildFirePrep}
          />
          <Route path='/blog' exact component={Blog} />
          <Route path='/posts/:id' exact component={PostDetailPage} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/404' component={NotFoundPage} />
          <Redirect to='/404' />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
