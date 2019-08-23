import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import TokenList from './components/TokenList'
import IssueToken from './components/IssueToken'


export default class Main extends Component {


    render() {
        return (
            <HashRouter>

                <div id='main'>
                    < Route exact path='/' component={TokenList} />
                    < Route exact path='/IssueToken' component={IssueToken} />
                    < Route exact path='/TokenList' component={TokenList} />
                </div>
            </HashRouter>
        )
    }


}