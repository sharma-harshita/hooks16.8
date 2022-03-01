import React, { useEffect } from "react";
import {io} from "socket.io-client"

const Socket = () => {

    useEffect(()=>{
        const socket = io("http://localhost:8000")
    },[])

    return (
        <div>
            "SOCKET"
        </div>
    )
}

export default Socket