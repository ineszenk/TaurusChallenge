import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TokenList from './components/TokenList'
import IssueToken from './components/IssueToken'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import store, { persistor } from './configureStore'


export default class Main extends Component {


    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    persistor={persistor}
                >
                    <BrowserRouter>

                        <div id='main'>
                            < Route exact path='/' component={TokenList} />
                            < Route path='/IssueToken' component={IssueToken} />
                            < Route path='/TokenList' component={TokenList} />
                        </div>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        )
    }


}