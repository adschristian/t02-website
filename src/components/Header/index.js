import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import fire from '../../config/Fire'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
        this.authListener = this.authListener.bind(this)
        this.isAuthenticaded = this.isAuthenticaded.bind(this)
    }
    
    componentDidMount() {
        this.authListener()
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
            }
        })
    }
    
    isAuthenticaded() {
        let location = window.location
        if (this.state.user) location.href = '/admin'
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">

                <div className="container">
                    <a className="navbar-brand" href="#top">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarPage">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarPage">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#profile">Perfil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfólio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#infos">Infos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <Link to="/login">
                        <Button className="btn btn-light" onClick={this.isAuthenticaded} >Entrar</Button>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Header