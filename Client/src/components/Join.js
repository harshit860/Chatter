import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Join = () => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div>
            <div>
                <h1>JOIN</h1>
                <div><input placeholder="Name" onChange={(event) => setName(event.target.value)} type="text" /></div>
                <div><input placeholder="Room" onChange={(event) => setRoom(event.target.value)} type="text" /></div>
                <Link onClick={event => (!name || !room ) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                
                    <button type="submit">Sign In</button>
                
                </Link>
            </div>
        </div>
    )
}

export default Join;