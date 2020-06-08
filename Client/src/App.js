import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Join from './components/Join';
import Chat from './components/Chat';


export default class App extends Component {
    render() {
        return (
                <Router>
                    <Route path="/" exact component={Join} />
                    <Route path="/chat" exact  component={Chat} />
                </Router>
        )
    }
}
