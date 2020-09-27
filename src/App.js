import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux Store
import store from './store';
import { Provider } from 'react-redux';

// CSS
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer/Footer';

// Utilities
import ScrollToTop from './utils/ScrollToTop';

// Pages
import Home from './components/pages/HomePage/Home';
import Blog from './components/pages/BlogPage/Blog';
import PostDetailPage from './components/pages/BlogPage/PostDetailPage';
import Resources from './components/pages/ResourcesPage/Resources';
import WildFirePrep from './components/pages/ResourcesPage/WildFirePrep';
import Contact from './components/pages/ContactPage/Contact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* About Route Here */}
          <Route path="/resources" exact component={Resources} />
          <Route path="/wildfire-prepardness" exact component={WildFirePrep} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/posts/:id" exact component={PostDetailPage} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
