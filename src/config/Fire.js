import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCjIPu7cfHb69AO_Q18v4sC2vY5_piwDwA",
    authDomain: "portfolio-dca92.firebaseapp.com",
    databaseURL: "https://portfolio-dca92.firebaseio.com",
    projectId: "portfolio-dca92",
    storageBucket: "portfolio-dca92.appspot.com",
    messagingSenderId: "1025387676877"
};
const fire = firebase.initializeApp(config);

export default fire