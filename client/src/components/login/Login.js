import React, {useState,useEffect} from 'react';
import { useHistory } from "react-router-dom"
import { auth ,db , storage } from '../../config/firebase';
import LoginForm from './LoginForm';
import './login.css';
import { getUserByEmail } from '../../services/UserService';

const Login = () => {
  let history = useHistory()

  const[user,setUser]=useState('');
  const[email, setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[emailError,setEmailError]=useState('');
  const[passwordError, setPasswordError]=useState('');
  const[hasAccount,setHasAccount]=useState('');

  const clearInputs = ()=>{
    setEmail('');
    setPassword('');
  }

  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin=()=>{
    clearErrors();
    auth
    .signInWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;

        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
    }
    });
  }

  
    const handleSignup=()=>{
      clearErrors();
    auth
    .createUserWithEmailAndPassword(email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        setEmailError(err.message);
        break;

        case "auth/weak-password":
          setPasswordError(err.message);
          break;
    }
    });
  }

  const handleLogout=()=>{
    auth.signOut();
  };

  const redirectUser = async (user) => {
    const userData = await getUserByEmail(user.email)
    if(userData.role === "admin") {
      history.push("/admin/dashboard")
    }
    else if(userData.role === "user") {
      history.push("/profile")
    }
    else{
      history.push("/home")
    }
  }

  const authListener=()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
        redirectUser(user);
      }
      else{
        setUser("");
      }
    });
  };

  useEffect(()=>
  {
    authListener();
  },[])

  return (
    <div>
      <LoginForm 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
      
    </div>
  )
}
 
export default Login


{/*import React from "react";
// import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LoginService from '../../services/LoginService';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const email = React.useRef(null);
  const password = React.useRef(null);
 

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
     
    }
    let response;
    try{
        response = await LoginService(data);
        if(response.success && response.data.token){
        const token = response.data.token;
        localStorage.setItem("token", token);
        
        } 
    } catch(err){
        console.log("Show error/ error handling")
    }
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form key={"haha"} className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={email}
            
          />
          <TextField
            inputRef={password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <Grid container>
            
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
*/}

