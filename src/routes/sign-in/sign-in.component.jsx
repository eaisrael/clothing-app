import { 
    singInWithGooglePopup,
    createUserDocumentFromAuth
 } from '../../utils/firebase/firebase.utils';


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await singInWithGooglePopup();
        const userDocRef =  await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    );
}

export default SignIn;