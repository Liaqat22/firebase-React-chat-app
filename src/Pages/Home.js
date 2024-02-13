import React, { useEffect, useState } from 'react'
import { useFireAuthContext } from '../context/fireAuthContext'
import ChatForm from './ChatForm'
import { useFirestore } from '../context/fireDBstorage'

function Home() {
  const [allChats, setAllChats] = useState([])
  const fireStoreContext = useFirestore()
  const fireAuthContext = useFireAuthContext()

  const getChats = async () => {
    try {
      const data = await fireStoreContext.getAllChats()
      const getData = data?.docs
      setAllChats(getData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getChats()
  })
  return (
    <>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          <h1 className='m-3'> welcome <b style={{color:"purple"}}>{fireAuthContext?.isLogin?(<>{fireAuthContext?.user?.displayName}</>):"Guest"} </b> </h1>

          <div className='col-md-8 chatCol8'>
            <div  className='main'>
           
              {fireAuthContext?.isLogin? (<>
                {allChats.length > 0 ? (<>
                  {allChats.map((chat) => (
                      <div key={chat.id} className={`msgoutmain ${chat?.data()?.id === fireAuthContext?.user?.uid ? "sent" : "recieved"}`}  >
                        <div className={`msgMain${chat?.data()?.id === fireAuthContext?.user?.uid ? "sent" : "recieved"}`}>
                   <h1 >{chat?.data().text}</h1>
                        </div>
                  </div>
                ))
                }
            </>)
              : (<>
                <h1 className='text-center'>write Something to start the chat </h1>
              </>)
              }
              
              </>) : (<><div className='text-center logininfo'>
                <p>You are not Loggedin</p>
                <p>person 1 : test@gmail.com , password : 123456</p>
                <p>person 2 : test2@gmail.com , password : 123456</p>
              </div> </>)}
            </div>

            <ChatForm />
          </div>


        </div>
      </div>

    </>
  )
}

export default Home
