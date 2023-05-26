
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {io} from "socket.io-client"

const useSocket = () =>{
    const { userInfo } = useSelector((state) => state.userSlice);
    const [socket,setSocket]=useState()
    const [onlineUsers,setOnlineUsers]=useState([])

    useEffect(()=>{
        if(!userInfo) return undefined
        const newSocket = io("http://localhost:3001")
        setSocket(newSocket)
      
        return () =>{
          newSocket.disconnect()
        }
      
      },[userInfo])
      
      useEffect(()=>{
        if(!socket) return undefined
        socket.emit("addNewUser",userInfo._id)
        socket.on("getOnlineUsers",(res) =>{
          setOnlineUsers(res)
        })
        return () =>{
            socket.off("getOnlineUsers")
        }
      },[socket])

      return {
        onlineUsers,
        socket
      }
}

export default useSocket