import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <h2>Contato</h2>
                    <p>Entre em contato</p>
                    <div id="contact-form" className="container mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <form action="https://formspree.io/your@email.com" method="POST">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" placeholder="Nome" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="_replyto" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" name="subject" placeholder="Assunto" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" type="textarea" rows="10" name="message" placeholder="Mensagem" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-dark" value="Enviar" />
                            </div>
                        </form>
                    </div>

                    <div id="contact-social" className="container mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h4>Redes Sociais</h4>
                        <p>Entre em contato comigo pelas redes sociais</p>
                        <div>
                            <a href="https://www.facebook.com/christian.alvesdasilva/" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img className="tiny-icon" src="./assets/icons/social/facebook-icon.png" alt="Ícone do Facebook" />
                                </figure>
                            </a>
                            <a href="https://www.instagram.com/c.asilva/" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img className="tiny-icon" src="./assets/icons/social/instagram-icon.png" alt="Ícone do Instagram" />
                                </figure>
                            </a>
                            <a href="https://www.linkedin.com/in/christian-alves-da-silva-7113a8143/" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img className="tiny-icon" src="./assets/icons/social/linkedin-icon.png" alt="Ícone do LinkedIn" />
                                </figure>
                            </a>
                            <a href="https://www.youtube.com/channel/UCGn4wA4TS3bBumnzD4oO3-w" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img className="tiny-icon" src="./assets/icons/social/youtube-icon.png" alt="Ícone do Youtube" />
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default Contact
