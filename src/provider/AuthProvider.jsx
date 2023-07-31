import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,onAuthStateChanged, signOut  } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth=getAuth(app)
  const handleSignUp = (email,password) => {

      return createUserWithEmailAndPassword(auth, email, password);
  }
  const handleSignIn = (email, password) => { 
  return signInWithEmailAndPassword(auth, email, password);
  }
    const handleSignOut = () => {
      return signOut(auth);
  };
  //observer
  useEffect(() => {
const unSubscribe= onAuthStateChanged(auth, (loggedUser) => {
  if (loggedUser) {
    setUser(loggedUser);
  } else { 
    setUser(null)
  }
});
    return () => { unSubscribe() }
  }, [])

    const authInfo = { user, handleSignUp, handleSignIn,handleSignOut };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;