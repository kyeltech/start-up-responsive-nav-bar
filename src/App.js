import React from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Portfolio from './pages/portfolio.jsx'
import Home from './pages/Home.jsx'
import ResponsiveNavigation from './Components/ResponsiveNavigation.jsx'
function App() {
  const navLinks = [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-ios-home'
    },
    {
      text: 'Contact',
      path: '/contact',
      icon: 'ion-ios-megaphone'
    },
    {
      text: 'About',
      path: '/contact',
      icon: 'ion-ios-business'
    },
    {
      text: 'Blog ',
      path: '/blog',
      icon: 'ion-ios-bonfire'
    },
    {
      text: 'Portfolio',
      path: '/portfolio',
      icon: 'ion-ios-briefcase'
    }
  ]
  return (
    <div className="App">
       <ResponsiveNavigation
       navLinks = { navLinks }
       logo = { logo }
       background="#fff"
       hoverBackground="#ddd"
       linkColor="#777"
       />
      <Route path='/' exact component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/about" component={About}/>
      <Route path="/blog" component={Blog}/>
   </div>
  );
}

export default App;
