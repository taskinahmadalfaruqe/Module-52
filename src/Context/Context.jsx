// eslint-disable-next-line no-unused-vars
import React, {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
    const Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading]=useState(true)

    // Create a user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false);

        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        isLoading,
        createUser,
        logIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default Context;
