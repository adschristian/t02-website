import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
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
                </div>
            </nav>
        </Fragment>
    )
}

export default Header