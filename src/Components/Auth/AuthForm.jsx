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
    
    const data = isInLoginView  ? rest : authData
    api.post(isInLoginView ? "login" : "register", data).then(res => {
      if(isInLoginView){
        console.log(res,'jksjksdjk')
        localStorage.setItem("token",res.data.token)
        dispatch(authenticateUser(res.data))
        // navigate("/dashboard")
      }
      else{
        alert("Regjistrimi u be me sukses")
        setAuthData({
          email:"",
          password:"",
          role:""
        })
      }
    
    }).catch(err => console.log(err))

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
          {isInLoginView ? "Sign in" : "Register"}
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
            autoComplete="email"
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
            autoComplete="current-password"
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
                  value="User"
                  control={<Radio    />}
                  label="Perdorues"
                />
                <FormControlLabel
                  value="Company"
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
            {isInLoginView ? "Sign In " : "Register"}
          </Button>
          <Grid container>
            <Grid item xs>
            <Button onClick={()=>navigate("/")} >
              Kryefaqja
            </Button>
          </Grid>
          
            <Grid item>
              <Link href="#" variant="body2" onClick={handleAuthState}>
                {isInLoginView ? "Don't have an account? Sign Up" : "Log in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}
