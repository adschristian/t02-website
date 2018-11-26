import React, { Component } from 'react';
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <section id="profile">
                <div className="container row mx-auto">
                    <div id="profile-photo" className="container col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto">
                        <figure>
                            <img src="./assets/img/profile-photo.jpg" alt="Foto de perfil"></img>
                            <figcaption>Olá, meu nome é Christian Alves. Graduando em Tecnologia em Análise e Desenvolvimento de Sistemas, nasci em Curitiba - PR, atualmente morando em Andirá - PR.</figcaption>
                        </figure>
                        <a href="./assets/files/curriculum-vitae.pdf" target="_blank" rel="noopener noreferrer">
                            <button id="curriculum-button" type="button">
                                Currículo Completo
                        </button>
                        </a>

                    </div>
                    <div className="container col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div>
                            <div id="interests">
                                <h3>Interesses</h3>
                                <ul>
                                    <li>Desenvolvimento Web</li>
                                    <li>Inteligência Artificial</li>
                                    <li>Informática aplicada à Educação</li>
                                </ul>
                            </div>

                            <div id="languages">
                                <h3>Idiomas</h3>
                                <ul>
                                    <li>Português - Nativo</li>
                                    <li>Inglês - Básico</li>
                                </ul>
                            </div>

                            <div id="academic">
                                <h3>Formação</h3>
                                <ul>
                                    <li>Em Curso - UTFPR - Tecnologia em Análise e Desenvolvimento de Sistemas</li>
                                    <li>2016 (Incompleto) - UENP - Bacharelado/Licenciatura em Sistemas de Informação</li>
                                    <li>2013 - SENAI - Técnico em Informática</li>
                                </ul>
                            </div>

                            <div id="activities">
                                <h3>Atividades</h3>
                                <ul>
                                    <li>Estagiário de Informática</li>
                                    <li>Músico</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Profile;