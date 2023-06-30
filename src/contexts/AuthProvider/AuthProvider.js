import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const providerLogin = (provider) => {
        setloading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateuser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logout = () => {
        setloading(true);
        return signOut(auth);
    }
    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          if( currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
          }
          setloading(false)
       });
       return () => {
         unsubscribe();
       }
    },[])

    const authInfo = {
        user, 
        loading,
        setloading,
        updateuser,
        verifyEmail,
        providerLogin, 
        createUser,
        logout,
        signIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;