import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,onAuthStateChanged, signOut  } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);
  const auth=getAuth(app)
  const handleSignUp = (email,password) => {
 setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
  }
  const handleSignIn = (email, password) => {
    setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
  }
  const handleSignOut = () => {
      setLoading(true)
      return signOut(auth);
  };
  //observer
  useEffect(() => {
const unSubscribe= onAuthStateChanged(auth, (loggedUser) => {
  if (loggedUser) {
    setUser(loggedUser);
    setLoading(false)
  } else { 
    setUser(null)
    setLoading(false)
  }
});
    return () => { unSubscribe() }
  }, [])

    const authInfo = { user, handleSignUp, handleSignIn,handleSignOut ,loading};
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;