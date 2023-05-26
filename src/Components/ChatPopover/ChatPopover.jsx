import React,{useState} from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SendIcon from "@mui/icons-material/Send";
import { api } from "utils/api/api";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function ChatPopOver({handleClose,anchorEl,receiver}) {

  const [message,setMessage]=useState("")
  
  const [conversation,setConversation]=useState([])
  const { userInfo } = useSelector((state) => state.userSlice);


  useEffect(()=>{
    api.get(`conversation/${receiver}`).then(res =>{
      console.log(res)
      setConversation(res.data) 
    }).catch(err => err)
  },[])
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  const handleSendMessage = () =>{
    
    const params={
      sender:userInfo?._id,
      receiver:receiver,
      message,
      ...(conversation.length>0 && {conversation:conversation[0]?._id})
    }
    if(conversation.length > 0){
      
      api.post("message",params).then(res => {
        toast.success("Mesazhi u dergua me sukses!")
        setMessage("")
      }).catch(err => err)
    }
    else{

      api.post("conversation",{members:[userInfo?._id,receiver]}).then(() =>{
  
        api.post("message",params).then(res => {
          toast.success("Mesazhi u dergua me sukses!")
          setMessage("")
        }).catch(err => err)
      }).catch(err => err)
    }
  }
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        placeholder="Dergo Mesazh.."
        value={message}
        onChange={e => setMessage(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <SendIcon onClick={handleSendMessage} />
            </IconButton>
          </InputAdornment>
        }
        label="Dergo"
      />
    </Popover>
  );
}
