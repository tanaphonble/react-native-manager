import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCgRbyAA435GSD9G0QM0P8MUVg3UfKXumw",
            authDomain: "manager-b6402.firebaseapp.com",
            databaseURL: "https://manager-b6402.firebaseio.com",
            projectId: "manager-b6402",
            storageBucket: "manager-b6402.appspot.com",
            messagingSenderId: "698051584891"
        }
        firebase.initializeApp(config)
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App