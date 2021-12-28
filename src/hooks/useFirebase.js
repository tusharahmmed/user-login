import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/Firebase.init";

// init firebase
initializeFirebase();

// useFirebase hook
const useFirebase = () => {

    // state
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // auth
    const auth = getAuth();

    // register new user
    const registerUser = (email, password, name, location, history) => {

        // loading 
        setIsLoading(true);

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

                const newUser = { email: email, displayName: name };
                setUser(newUser);

                // set name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                // redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoading(false));;
    }

    // handle google sign in
    const googleSignIn = (location, history) => {

        // loading 
        setIsLoading(true);
        // provider
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                // The signed-in user info.
                setUser(result.user);

                // redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }



    // handle login
    const handleLogin = (email, password, location, history) => {

        // set loading
        setIsLoading(true);

        //login
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user);

                // redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    }

    // user observe on state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            // loading 
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);


    // sign out
    const logOut = () => {

        // set loading
        setIsLoading(true);

        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.

        })
            .finally(() => setIsLoading(false));
    }

    // return from hook
    return {
        registerUser,
        googleSignIn,
        handleLogin,
        user,
        logOut,
        isLoading
    }

}

export default useFirebase;