import React, { createContext, useContext } from 'react'
import {app} from "../firebase"
import { addDoc, collection, getDocs, getFirestore, orderBy, query, serverTimestamp } from "firebase/firestore"
import { useFireAuthContext } from './fireAuthContext'

const store = getFirestore(app)
const Chatstore = createContext()

function FireStoreProvider({children}) {

const fireAuthContext = useFireAuthContext()


// send message
  const userChats = async(message)=>{
    await addDoc(collection(store  , "chats"),{
     text  : message,
     displayName : fireAuthContext?.user?.displayName,
     id : fireAuthContext?.user?.uid,
     createdAt: serverTimestamp()
    })
  }
  
  //get all message 
const getAllChats = async () => {
  const collectionRef = collection(store, "chats");
  const res = await query(collectionRef, orderBy('createdAt'));
  return await getDocs(res);
}

  return (
    <>
      <Chatstore.Provider value={{
        userChats,
        getAllChats
      }}>{children}</Chatstore.Provider>
    </>
  )
}
const useFirestore = () => useContext(Chatstore)
export { FireStoreProvider , Chatstore,useFirestore}
