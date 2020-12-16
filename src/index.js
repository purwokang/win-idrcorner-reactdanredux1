import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, CreateStore } from 'redux'

import reducers from './reducer'
import App from './components/App'

ReactDOM.render(
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())} >
        <App />
    </Provider>

    , document.getElementById('root'))

