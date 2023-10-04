// eslint-disable-next-line no-unused-vars
import React, {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
    const Context = ({children}) => {
    const [user, setUser] = useState(null);

    // Create a user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        return signOut(auth);
    }

    const AuthInfo = {
        user,
        createUser,
        logIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default Context;
