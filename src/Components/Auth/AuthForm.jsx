import {useState} from 'react'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate  } from "react-router-dom";
import { api } from 'utils/api/api';
import {useDispatch} from 'react-redux'
import { authenticateUser } from "redux/slices/User";
import { toast } from 'react-toastify';
import { validateEmail } from 'helpers/validateEmail';

export default function AuthForm({ isInLoginView, handleAuthState }) {
    const [authData,setAuthData]=useState({
        email:"",
        password:"",
        role:""
    })
    const navigate = useNavigate ();
    const dispatch = useDispatch()
    const handleFormChange = (e) =>{
        const {name,value}=e.target
        setAuthData({
            ...authData,
            [name]:value
        })
    }
    console.log(authData)
  const handleSubmit = (event) => {
    event.preventDefault();
    const {role,...rest}=authData
    if(!authData.email || !authData.password){
      alert("Emaili ose Fjale Kalimi nuk mund te jete bosh!")
      return;
    }
    if(!validateEmail(authData.email)){
      alert("Emaili duhet te jete ne formatin e duhur!")
      return;
    }
    
  
    const data = isInLoginView  ? rest : authData
    api.post(isInLoginView ? "login" : "register", data).then(res => {
      if(isInLoginView){
        console.log(res,'jksjksdjk')
        localStorage.setItem("token",res.data.token)
        dispatch(authenticateUser(res.data))
        navigate("/dashboard")
      }
      else{
        alert("Regjistrimi u be me sukses")
        setAuthData({
          email:"",
          password:"",
          role:""
        })
      }
    
    }).catch(err => toast.error(err.response.data))

  };
  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#e74645" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isInLoginView ? "Kycu" : "Regjistrohu"}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={authData.email}
            onChange={handleFormChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={authData.password}
            onChange={handleFormChange}


            label="Password"
            type="password"
            id="password"
          />

          {!isInLoginView && (
            <FormControl>
              <label  >
                Rregjistrohu Si : 
              </label>
              <RadioGroup
                row
                name="role"
                value={authData.role}
                onChange={handleFormChange}
    
              >
                <FormControlLabel
                  value="user"
                  control={<Radio    />}
                  label="Perdorues"
                />
                <FormControlLabel
                  value="company"
                  control={<Radio  />}
                  label="Kompani"
                />
             
              </RadioGroup>
            </FormControl>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isInLoginView ? "Kycu " : "Regjistrohu"}
          </Button>
          <Grid container>
            <Grid item xs>
            <Button onClick={()=>navigate("/")} >
              Kryefaqja
            </Button>
          </Grid>
          
            <Grid item>
              <Link href="#" variant="body2" onClick={handleAuthState}>
                {isInLoginView ? "Nuk ke nje llogari? Rregjistrohu" : "Kycu"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}
