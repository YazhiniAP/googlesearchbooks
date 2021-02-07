import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB7BgLx4jE5Qj_yzvehlz-w8pTq0cCmtyM",
  authDomain: "fstore-3929a.firebaseapp.com",
  databaseURL: "https://fstore-3929a.firebaseio.com",
  projectId: "fstore-3929a",
  storageBucket: "fstore-3929a.appspot.com",
  messagingSenderId: "1016767849716",
  appId: "1:1016767849716:web:b08f6e6d5337e3bac46aa1"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
// please test 
// type error: firebase.default.firestore is not a function---same
// reopen the xpo mobile app an
//shall i strt?
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}
//export default firebase.database()


export default firebase.firestore();
