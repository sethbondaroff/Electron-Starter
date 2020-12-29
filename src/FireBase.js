import * as firebase from 'firebase'

const config = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()