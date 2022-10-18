import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../menu/Firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider( {children } ) {
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return createUserWithEmailAndPassword(email, password)
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut()
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(true)
    })

    return unsubscribe
  }, [])

  const value = {
    signup,
    logIn,
    logout,
    resetPassword,
    currentUser,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {loading && children}
    </AuthContext.Provider>
  )
}
