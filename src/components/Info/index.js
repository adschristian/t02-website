import React from 'react'
import './Info.css'

const Info = () => {
    return (
        <section id="infos">
            <div className="container mx-auto">
                <h2>Mais informações</h2>
                <div className="mx-auto col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p id="quote">
                        "Você não pode ver o que eu vejo porque vê o que você vê. Não pode saber o que eu sei porque sabe o que você sabe. O que vejo e o que sei não podem ser acrescentados ao que você vê e ao que você sabe porque são coisas diferentes. Nem podem substituir o que você vê e o que você sabe porque isto seria substituir você mesmo."
                    </p>
                    <p id="quote-author">Douglas Adams</p>
                </div>
                <div className="container row">
                    <div className="container col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div id="infos-biography">
                            <h4>Biografia</h4>
                            <p>
                                Em 2012 conclui o Ensino Médio pelo Colégio Estadual Durval Ramos Filho, em Andirá. Ainda neste ano, inicie o curso técnico em Informática, pelo SENAI-PR, ofertado pelo programa do governo (PRONATEC). Como trabalho de conclusão de curso, desenvolvemos um pequeno software de gestão escolar. Em 2014 iniciei o curso de Bacharelado e Licenciatura em Sistemas de Informação na UENP/CLM, não concluindo. Em 2017 comecei a estudar na UTFPR, o curso de Tecnologia em Análise e Desenvolvimento de Sistemas com previsão de conclusão em 2019.
                            </p>
                        </div>
                    </div>

                    <div className="container col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div id="infos-future">
                            <h4>Futuro</h4>
                            <p>
                                Falar sobre o futuro é algo imaginativo. Assim como alguns outros estudantes, tenho anseios em entrar no mercado de trabalho, mas quero estar preparado ao máximo. Tenho interesse declarado em ter uma carreira no exterior, não só pelo prestígio profissional, mas também por um bom lugar para se viver. Vejo com bons olhos, ainda, a possibilidade de seguir a área acadêmica, porque imagino como deve ser gratificante ser um professor, e ser reconhecido perante a comunidade. No entanto, para ambas as opções é necessário bastante empenho. Por isso me comprometo à dedicação e esforços na minha jornada universitária, para que em um futuro próximo possa desfrutar dos frutos da minha escolha.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="infos-github">
                    <h4>GitHub</h4>
                    <text>Veja alguns dos meus projetos no GitHub</text>
                    <a href="https://www.github.com/adschristian" target="_blank" rel="noopener noreferrer">
                        <figure>
                            <img className="medium-icon" src="./assets/icons/social/github-icon.png" alt="Ícone do GitHub" />
                        </figure>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Info