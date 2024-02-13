import { message } from 'antd'
import React, { useState} from 'react'
import { useFirestore } from '../context/fireDBstorage'

function ChatForm() {
    const [msgs , setMsgs] = useState("")
    const fireStoreContext = useFirestore()

    const handleSubmit = async(e) =>{
      e.preventDefault()
        try {
             await fireStoreContext.userChats(msgs)
             message.success('msg sent')
             setMsgs(" ")
        } catch (error) {
            console.log(error)
            message.error("meassge in not delivered")
        }
    }

  return (
    <>
       

<form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <input type="text" className="form-control" value={msgs} id="messages"  placeholder='messages ...' onChange={(e) => setMsgs(e.target.value)} required />
        </div>
      
       
        <div className='text-center mb-3 '>

        <button type="submit" className='btn btn-primary formbtn font2rem mt-3' >Send</button>
        </div>
        </form>
           
    </>
  )
}

export default ChatForm
