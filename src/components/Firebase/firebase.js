import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAVTroqJlneRvRCz47yl3ETsNklaBDWUqk",
    authDomain: "android-quiz-87771.firebaseapp.com",
    databaseURL: "https://android-quiz-87771.firebaseio.com",
    projectId: "android-quiz-87771",
    storageBucket: "android-quiz-87771.appspot.com",
    messagingSenderId: "1027943703900",
    appId: "1:1027943703900:web:bb3038e5ce7ca004fe4d99"
  };





class  Firebase {

    constructor(){
        app.initializeApp(config);
       this.auth= app.auth()  ; 
       this.db = app.firestore();
    }

    //inscription
    signupUser = (email,password) => 
    this.auth.createUserWithEmailAndPassword(email,password);

    // connexion
    loginUser = (email,password) =>
    this.auth.signInWithEmailAndPassword(email,password);

    //deconnexion
    signoutUser =() => this.auth.signOut();

    //recuperer le mots de passe 
    passwordReset = email => 
    this.auth.sendPasswordResetEmail(email);


   user= uid => this.db.doc( `users/${uid}`);
}

export default Firebase;