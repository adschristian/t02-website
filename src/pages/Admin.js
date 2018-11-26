import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import fire from '../config/Fire'
import Button from '../components/Button'


class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
        this.authListener = this.authListener.bind(this)
    }
    componentDidMount() {
        this.authListener()
    }

    // função que verifica se o usuário está autenticado
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
                window.location.href = '/login'
            }
        })
    }

    // Função que realiza logout do sistema
    logout() {
        fire.auth().signOut()
        this.state(null)
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">

                    <div className="container">
                        <Link to='/'><a className="navbar-brand" href="#top">Home</a></Link>
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
                        <Button className="btn btn-light" onClick={this.logout}>Sair</Button>
                    </div>
                </nav>

                <section>
                    <div className="container row mx-auto">
                        <div className="container mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <form method="POST">
                                <div id="profile-form">
                                    <h4>Perfil</h4>
                                    <div className="form-group">
                                        <input className="form-control" type="file" id="photo-chooser" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" type="text" rows="5" name="minibio" placeholder="Mini-Biografia" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="file" id="curriculum-chooser" />
                                        <Button className="btn">Selecionar arquivo</Button>
                                    </div>
                                </div>

                                <div id="interests-form">
                                    <h4>Interesses</h4>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="add-interest" placeholder="Interesse" />
                                            <Button className="btn">Adicionar</Button>
                                        </div>
                                    </form>
                                </div>
                                <div id="languages-form">
                                    <h4>Idiomas</h4>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="idiom" placeholder="Idioma" />
                                            <Button className="btn">Adicionar</Button>
                                        </div>
                                    </form>
                                </div>

                                <div id="academic-form">
                                    <h4>Formação Acadêmica</h4>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="formation" placeholder="Formação" />
                                            <Button className="btn">Adicionar</Button>
                                        </div>
                                    </form>
                                </div>

                                <div id="activities-form">
                                    <h4>Atividades desenvolvidas</h4>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="activity" placeholder="Atividade" />
                                            <Button className="btn">Adicionar</Button>
                                        </div>
                                    </form>
                                </div>

                                <div id="skills-form">
                                    <h4>Habilidades</h4>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="skill" placeholder="Habilidade" />
                                            <Button className="btn">Adicionar</Button>
                                        </div>
                                    </form>
                                </div>

                                <div id="projects-form">
                                    <h4>Portfólio</h4>
                                    <form>
                                        <div className="form-group">
                                            <div id="project">
                                                <input className="form-control" type="text" name="project-name" placeholder="Nome do projeto" />
                                                <input className="form-control" type="text" name="project-description" placeholder="Descrição" />
                                            </div>
                                            <Button className="btn">Adicionar</Button>
                                        </div>
                                    </form>
                                </div>

                                <div id="info-form">
                                    <h4>Mais informações</h4>
                                    <div className="form-group">
                                        <textarea className="form-control" type="text" rows="5" name="info-text" placeholder="Mais informações" />
                                    </div>
                                </div>

                                <div id="biography-form">
                                    <h4>Biografia completa</h4>
                                    <div className="form-group">
                                        <textarea className="form-control" type="text" rows="5" name="biography-text" placeholder="Biografia Completa" />
                                    </div>
                                </div>

                                <div id="github-form">
                                    <h4>GitHub</h4>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="github-link" placeholder="Link para o perfil do GitHub" />
                                    </div>
                                </div>

                                <div id="other-links-form">
                                    <h4>Redes Sociais</h4>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="facebook-link" placeholder="Facebook" />
                                            <input className="form-control" type="text" name="instagram-link" placeholder="Instagram" />
                                            <input className="form-control" type="text" name="linkedin-link" placeholder="LinkedIn" />
                                            <input className="form-control" type="text" name="youtube-link" placeholder="YouTube" />
                                            <input className="form-control" type="text" name="twitter-link" placeholder="Twitter" />
                                        </div>
                                    </form>
                                </div>

                                <div className="form-group row">
                                    <Button className="btn btn-dark" name="save">Salvar alterações</Button>
                                    <Button className="btn btn-dark" name="cancel">Descartar alterações</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Admin