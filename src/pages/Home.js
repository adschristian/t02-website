import React, { Fragment, Component } from 'react';

import Header from '../components/Header'
import Profile from '../components/Profile'
import Skills from '../components/Skills'
import Blog from '../components/Blog'
import Portfolio from '../components/Portfolio'
import Info from '../components/Info'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Profile />
        <Skills />
        <Blog />
        <Portfolio />
        <Info />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
