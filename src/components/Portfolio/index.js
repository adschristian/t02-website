import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container mx-auto">
                <h2>Portfólio</h2>
                <h4>Alguns pequenos projetos desenvolvidos</h4>
                <div className="container row">
                    <div className="card col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card-body">
                            <div>
                                <h4 className="card-title">Curriculum Vitae</h4>
                                <p className="card-text">Primeiro trabalho da disciplina de Programação Web. Consistia em criar uma página web como um currículo.</p>
                                <a className="btn btn-dark" href="https://adschristian.github.io/curriculum-vitae/" target="_blank" rel="noopener noreferrer">Página na Web</a>
                                <a className="btn btn-dark" href="https://github.com/adschristian/curriculum-vitae" target="_blank" rel="noopener noreferrer">Repositório</a>
                            </div>
                        </div>
                    </div>

                    <div className="card col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card-body">
                            <div>
                                <h4 className="card-title">Geovanna Garcia</h4>
                                <p className="card-text">Trabalho de Programação Web. O objetivo era reproduzir um site já pronto, utilizando apenas HTML e CSS.</p>
                                <a className="btn btn-dark" href="https://adschristian.github.io/t01-website/" target="_blank" rel="noopener noreferrer">Página na Web</a>
                                <a className="btn btn-dark" href="https://github.com/adschristian/t01-website" target="_blank" rel="noopener noreferrer">Repositório</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Portfolio