import firebase from 'firebase';
import 'firebase/storage'

export const app = firebase.initializeApp({
    "projectId": "medsul-34518",
    "appId": "1:153118554958:web:fee093856cafc8b0effc1f",
    "databaseURL": "https://medsul-34518.firebaseio.com",
    "storageBucket": "medsul-34518.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDcHPXp4mrIQY6Y38QQpA2lWlUm-Y7xpOk",
    "authDomain": "medsul-34518.firebaseapp.com",
    "messagingSenderId": "153118554958"
});