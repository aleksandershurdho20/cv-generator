import React, { useEffect, useState, useRef } from "react";
import {
  Paper,
  Grid,
  Box,
  ListItemButton,
  Divider,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Fab,
  Container,
  Stack
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { api } from "utils/api/api";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import useSocket from "hooks/useSocket";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";
const Messages = () => {
  const { userInfo } = useSelector((state) => state.userSlice);
  const [conversation, setConversation] = useState([]);
  const [messages, setMessages] = useState([]);
  const [conversationData, setConversationData] = useState("");
  const [message, setMessage] = useState("");
  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [socket,setSocket]=useState()
  const [onlineUsers,setOnlineUsers]=useState([])
  const scroll = useRef()
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
  // const { onlineUsers, socket } = useSocket();
  useEffect(() => {
    api
      .get(`conversation/${userInfo?._id}`)
      .then((res) => {
        setConversation(res.data);
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {
    if (!conversationData) return undefined;
    api
      .get(`messages/conversation/${conversationData.conversation}`)
      .then((res) => setMessages(res.data));
  }, [conversationData]);

  useEffect(() => {
    socket?.on("getMessage", (res) => {
      console.log(res,"soket")
      // if (conversationData?._id !== res.chatId) return;
      // Update the messages state with the new message
      setMessages((prevMessages) => [...prevMessages, {message:res.message}]);
    });

    // Cleanup the socket event listener when the component unmounts
    return () => {
      socket?.off("getMessage");
    };
  }, [socket, conversationData]);

  useEffect(()=>{
    if(!socket && !hasSentMessage) return undefined
    socket.emit("sendMessage", {
      message,
      id: conversationData.userProfileId
        ? conversationData.userProfileId?.user
        : conversationData.companyProfileId?.user,
    });
  },[socket,hasSentMessage])

  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"})
  },[messages])
  const filteredConversationMembers = conversation.flatMap((conv) =>
    conv.members
      .filter((member) => member._id !== userInfo?._id)
      .map((member) => ({ conversation: conv._id, ...member }))
  );

  const getActiveUsers = (user) => {
    return onlineUsers.some((users) => users.userId == user._id);
  };

  const handleChange = (e) => setMessage(e.target.value);

  const handleSend = () => {
    const data = {
      conversation: conversationData.conversation,
      receiver: conversationData?.userProfileId
        ? conversationData.userProfileId?._id
        : conversationData?.companyProfileId?._id,
      sender: userInfo?._id,
      message: message,
    };
    setHasSentMessage(true);

    api
      .post("message", data)
      .then((res) => {
        console.log(res.data);
        setMessages((prevMessages) => [...prevMessages, res.data]);
        setMessage("");
        setHasSentMessage(false);
      })
      .catch((_) => setHasSentMessage(false));
  };

  const handleDelete = (id) =>{
    console.log(conversationData,'sdss')
    const body ={
      user:userInfo?._id
    }
    console.log(body,'bd')
    api.post(`conversation/user/${id}`,body).then(res =>{
            const filteredConversations= [...conversation].filter(conv => conv._id !== id)
      setConversation(filteredConversations)
      setConversationData("")
      setMessages([])
      toast.success("Biseda u fshi me sukses")
    })
    // api.delete(`conversation/${id}`).then(res =>{
    //   const filteredConversations= [...conversation].filter(conv => conv._id !== id)
    //   setConversation(filteredConversations)
    //   setConversationData("")
    //   setMessages([])
    //   toast.success("Biseda u fshi me sukses")
    // })
  }

  
  
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        component={Paper}
        sx={{
          width: "100%",
          height: "80vh",
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <List>
            <ListItemButton key="RemySharp">
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="John Wick"></ListItemText>
            </ListItemButton>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            {filteredConversationMembers.length > 0
              ? filteredConversationMembers.map((conversation) => (
                  <ListItemButton
                    key={conversation._id}
                    onClick={() => setConversationData(conversation)}
                  >
                    <ListItemIcon>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                      />
                    </ListItemIcon>
                    <ListItemText>
                      {conversation.userProfileId
                        ? conversation.userProfileId.name +
                          " " +
                          conversation.userProfileId.last_name
                        : conversation.companyProfileId.name}{" "}
                    </ListItemText>
                    <ListItemText
                      secondary={
                      getActiveUsers(conversation) ? <Box
                        
                        width="15px"
                        height="15px"
                        backgroundColor="#0fcc45"
                        borderRadius="50%"
                        
                        /> 
                        : <Box
                        
                        width="15px"
                        height="15px"
                        backgroundColor="#ececec"
                        borderRadius="50%"
                        
                        />
                      } 
                      align="right"
                    ></ListItemText>
                  </ListItemButton>
                ))
              : " No conversation"}
          </List>
        </Grid>
        <Grid item xs={9}>

          <List
            sx={{
              height: "70vh",
              overflowY: "auto",
            }}
          >
            {messages.length > 0
              ? messages.map((m) => (
                  <ListItem key={m._id} ref={scroll}
                  sx={{
                    maxWidth:450,
                    // padding:15,
                    borderRadius:15,
                    background:m.sender === userInfo?._id ? " #579ffb" : "#ececec",
                    ...(m.sender === userInfo?._id && {marginLeft:"auto",marginRight:"5px"}),
                    ...(m.sender !== userInfo?._id && {marginRight:"auto",marginLeft:"5px"}),
                    marginTop:"10px",
                    marginBottom:"10px",
                    color:m.sender === userInfo?._id ? "white" : "black"
                  }}
                  
                  >
                    <Grid container   
                            >
                      <Grid item xs={12}>
                        <ListItemText
                         
                          align={m.sender === userInfo?._id ? "left" : "right"}
                          primary={m.message}
                        >
                        </ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))
              : <Typography textAlign="center" marginTop="50px">
                
                Zgjidhni nje bisede per te pare mesazhet
                </Typography>}
          </List>
          <Divider />
          {conversationData && <Grid container style={{ padding: "20px" }}>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
                value={message}
                onChange={handleChange}
              />
              {console.log(message, "message")}
            </Grid>
            <Grid xs={4} align="right">
             <Stack direction="row" spacing={2}>

             <Fab color="primary" aria-label="add" disabled={!message}>
                <SendIcon onClick={handleSend} />
              </Fab>

              <Fab color="red" aria-label="delete">
                <DeleteIcon onClick={()=>handleDelete(conversationData.conversation)} />
              </Fab>
             </Stack>
            </Grid>
           
          </Grid> }
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default Messages;
