import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
 const config={
    apiKey: "AIzaSyB7e857JJSCiaROon_X5q4jtiLda8HwmgE",
    authDomain: "weight-db-a1cad.firebaseapp.com",
    projectId: "weight-db-a1cad",
    storageBucket: "weight-db-a1cad.appspot.com",
    messagingSenderId: "87375110440",
    appId: "1:87375110440:web:5dc2f50c31198485e0b01d",
    measurementId: "G-5HWB4RT2CW"
 };
 export const createUserProfileDocument= async(userAuth, additionalData)=>{
    if(!userAuth) return;
    
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    
    if(!snapShot.exists){
       const {displayName,email}=userAuth;
       const createdAt=new Date();

       try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData

          })
       }catch(error){
            console.log('error creating user',error.message);
       }
    }
    return userRef;
  };

  
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;