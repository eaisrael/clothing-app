import { initializeApp } from "firebase/app";
import {
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    Firestore
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3_Le9Q8J133yiiWAFgM2XYlkpBU4Ak8Q",
    authDomain: "clothing-db-d47e7.firebaseapp.com",
    projectId: "clothing-db-d47e7",
    storageBucket: "clothing-db-d47e7.appspot.com",
    messagingSenderId: "143861267443",
    appId: "1:143861267443:web:66cc8b084b29053daab086"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);
    
    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,
                {displayName,
                email,
                createdAt});
        } catch (error){
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
  };