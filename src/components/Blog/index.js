import React from 'react'
import './Blog.css'

const Blog = () => {
    return (
        <section id="blog">
        <h2>Blog</h2>
            <div className="container row mx-auto">
                <article className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a href="https://whiplash.net/materias/cds/060598-pinkfloyd.html" rel="noopener noreferrer" target="_blank">
                        <figure>
                            <img src="./assets/img/pinkfloyd.jpg" alt="Capa do álbum 'Animals' - 1977"></img>
                            <figcaption>
                                Uma resenha publicada na página Whiplash, sobre um dos meus álbuns preferidos da banda Pink Floyd.
                            </figcaption>
                        </figure>
                    </a>
                </article>

                <article className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a href="https://medium.com/@Polly_Moraees/o-guia-do-mochileiro-das-gal%C3%A1xias-nerd-no-sense-c5eade73f87a" rel="noopener noreferrer" target="_blank">
                        <figure>
                            <img src="./assets/img/douglas-adams.jpg" alt="DON'T PANIC"></img>
                            <figcaption>
                                Uma artigo publicado na página Medium, sobre meus livros (e autor) favoritos.
                            </figcaption>
                        </figure>

                        <p></p>
                    </a>
                </article>

                <article className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a href="https://medium.com/@paulovelho/a-depress%C3%A3o-c%C3%B4mica-de-bojack-horseman-fdeb4eb02382" rel="noopener noreferrer" target="_blank">
                        <figure>
                            <img src="./assets/img/bojack-horseman.png" alt="Personagem Bojack Horseman"></img>
                            <figcaption>
                                Um artigo publicado na página Medium, sobre uma das minhas séries preferidas da Netflix.
                            </figcaption>
                        </figure>

                        <p></p>
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Blog