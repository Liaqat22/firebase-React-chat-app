// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { app } from '../firebase'
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth' 
// import { getDatabase, ref, set } from 'firebase/database' 


// const auth = getAuth(app)
// const database = getDatabase(app)
// const googleprovider = new GoogleAuthProvider()

// const FireAuth = createContext()

// function FireAuthProvider({children}) {
//     //Register
//     const register  = async(email , password) =>{
//        await createUserWithEmailAndPassword(auth , email,password)
//     }

//     //Login
//     const login  = async(email , password) =>{
//       await  signInWithEmailAndPassword(auth , email,password)
//     }

//     // check wether the user is logged in or not
//    const [User , setUser] = useState(null)
//    useEffect(()=>{
//     onAuthStateChanged(auth , (user)=>{
//         if (user) {
//           setUser(user)
//         }else{
//           setUser(null)
//         }
//     })
//    },[])
//    const checkAuth = User ? true : false
//    // login with google
// const loginWithGoogle = () =>{
//     signInWithPopup(auth , googleprovider)
// }

// // logout
// const logOut =()=>{ signOut(auth)}

// // real time database
// const putData = (key, data) => {
//   set(ref(database, key), data);
// }
//   return (
//     <>
//       <FireAuth.Provider value={{
//         register,
//         login,
//         logOut,
//         checkAuth,
//         loginWithGoogle,
//         User,
//         putData
//       }}>{children}</FireAuth.Provider>
//     </>
//   )
// }
// const useFireAuth = () => useContext(FireAuth)

// export {FireAuthProvider,FireAuth,useFireAuth} 

import React, { createContext, useContext, useEffect, useState } from 'react'
import {app} from "../firebase"
import {createUserWithEmailAndPassword,
   getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
     signOut, updateProfile} from "firebase/auth" 
     import {getFirestore} from "firebase/firestore"

const auth = getAuth(app)
const store = getFirestore(app)

const FireAuth = createContext()

function FireAuthProvider({children}) {

  // register
  const Register = async(email , password ) =>{
   
    await createUserWithEmailAndPassword(auth , email , password)
  }
  // user profile
  const userProfile = async (displayName, phoneNumber) => {
    await updateProfile(auth.currentUser, {
      displayName: displayName,
      phoneNumber: phoneNumber,
    });
  };
  // login 
  const login = async (email , password) =>{
    await signInWithEmailAndPassword(auth , email ,password)
  }

  //logout
  const logout = async() =>{
    await signOut(auth)
  }

  //check user
  const [user , setUser] = useState(null)

 useEffect (()=>{
  onAuthStateChanged(auth , (info)=>{
    if(info) setUser(info);
    else setUser(null)
  })
 },[])

console.log(user , 'user')
const isLogin = user? true : false

  return (
    <>
<FireAuth.Provider value={{
  Register,
  login,
  logout,
  userProfile,
  isLogin,
  user
}}>{children}</FireAuth.Provider>
      
    </>
  )
}
const useFireAuthContext = () => useContext(FireAuth)

export  {FireAuthProvider , FireAuth,useFireAuthContext}
