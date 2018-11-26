import React, { Component } from 'react'
import Fire from '../config/Fire'
import './css/style.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login(e) {
        e.preventDefault();
        Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log('redirecting')
                window.location.href = '/admin'
            }).catch((error) => {
                console.log('Error: ', error)
            });
    }

    render() {
        return (
            <div id="login-form" className="container">
                <div id="contact-form" className="container card mx-auto col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <form action="https://formspree.io/your@email.com" method="POST">
                        <div className="form-group">
                            <input value={this.state.email} onChange={this.handleChange} className="form-control" type="email" name="email" id="input-email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input value={this.state.password} onChange={this.handleChange} className="form-control" type="password" name="password" id="input-password" placeholder="Senha" required />
                        </div>
                        <div className="form-group mx-auto" style={{ textAlign: "center" }}>
                            <Link to='/admin'>
                                <Button type="submit" onClick={this.login} className="btn btn-dark">Entrar</Button>
                            </Link>
                            <Link to='/'>
                                <Button type="button" className="btn btn-dark">Voltar</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login