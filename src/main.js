import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TokenList from './components/TokenList'
import IssueToken from './components/IssueToken'


export default class Main extends Component {


    render() {
        return (
            <BrowserRouter>

                <div id='main'>
                    < Route exact path='/' component={TokenList} />
                    < Route path='/IssueToken' component={IssueToken} />
                    < Route path='/TokenList' component={TokenList} />
                </div>
            </BrowserRouter>
        )
    }


}