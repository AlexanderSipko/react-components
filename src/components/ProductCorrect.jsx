import React, { useEffect, useState } from "react"
import { API } from './api'

import { RenderList } from './RenderList'


function ProductCorrect ({urlPoint}) {
  const api = new API()

  // console.log(api)
  const [ server, setServer ] = useState(api.DEFAULT_STATE)
  
  const getUsers = async () => {
    setServer(api.DEFAULT_STATE)
    let newState = await api.get(urlPoint)
    setServer(newState)
  }

  return (
      <>
        {server.error}
        <button onClick={() => getUsers()}>Get Users</button>
          {server.isLoad ?
            <h5>Load Data ...</h5> :
            <RenderList list={server.data}/>
          }
      </>
  )
}

export { ProductCorrect }
