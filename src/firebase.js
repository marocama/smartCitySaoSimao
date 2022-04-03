import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
  projectId: "saosimao",
  measurementId: "G-8NMYC2H5VG",
  messagingSenderId: "864608769005",
  storageBucket: "saosimao.appspot.com",
  authDomain: "saosimao.firebaseapp.com",
  apiKey: "AIzaSyD9gJl3OaGWe4aO7Nk0nAVVWMrCT4ydnVk",
  appId: "1:864608769005:web:8d8408f49b4f2b096b4de4",
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const auth = firebase.auth()
const db = firebase.firestore()
const field = firebase.firestore
const storage = firebase.storage()
const storageRef = firebase.storage().ref()
const GoogleProvider = new firebase.auth.GoogleAuthProvider()

const GuideColl = db.collection('Guide')
const UsersColl = db.collection('Users')

export {
  db, 
  auth,
  field,
  storage,
  GuideColl,
  UsersColl,
  storageRef,
  GoogleProvider,
}
