import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

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
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        )
    }
}

export default App