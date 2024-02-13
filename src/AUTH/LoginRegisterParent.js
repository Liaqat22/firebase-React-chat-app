import React from 'react'

function LoginRegisterParent({children}) {
  return (
    <>
      <div className='container-fluid'>
        <div className='row  d-flex justify-content-center'>
            <div className='col-md-6'>
                <main>
                    {children}
                </main>
            </div>
        </div>
      </div>
    </>
  )
}

export default LoginRegisterParent
