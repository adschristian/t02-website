import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                <h4>Algumas habilidades</h4>
                <ul id="list-skills" className="container">
                    <li className="badge">C</li>
                    <li className="badge">Java</li>
                    <li className="badge">SQL</li>
                    <li className="badge">Python</li>
                    <li className="badge">PostgreSQL</li>
                    <li className="badge">HTML</li>
                    <li className="badge">CSS</li>
                    <li className="badge">Javascript</li>
                </ul>
            </div>
        </section>
    )
}

export default Skills