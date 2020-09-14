import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

        if (!firebase.apps.length) {
            const config = {
                apiKey: "AIzaSyA6OIj4Fw2fBx-ZX6ukGdV07qVaHQ5S0y8",
                authDomain: "todolist-fc03c.firebaseapp.com",
                databaseURL: "https://todolist-fc03c.firebaseio.com",
                projectId: "todolist-fc03c",
                storageBucket: "todolist-fc03c.appspot.com",
                messagingSenderId: "328724694662",
                appId: "1:328724694662:web:3596e1ca7e6977b7cdb307",
                measurementId: "G-LHH4RRXT7P"
            }
            firebase.initializeApp(config)
           }
           
           const db = firebase.firestore()
           export {
            firebase,
            db
           }