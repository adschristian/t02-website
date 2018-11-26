import React, { Component } from 'react'

// Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin'
import ErrorPage from './pages/ErrorPage'

// Roteamento
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/admin' component={Admin} />
                    <Route path='*' component={ErrorPage} />
                </Switch>
            </Router>
        )
    }
}

export default App