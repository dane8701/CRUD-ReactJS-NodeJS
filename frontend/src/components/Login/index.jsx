import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios'
import Checkbox from '@material-ui/core/Checkbox';

const Login=({handleChange})=>{

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [userOnline, setUserOnline] = useState({
        userId: "",
        token: ""
    });

    function login(e) {
        e.preventDefault();
        console.log("post");
        // console.log("email " + user.email);
        // console.log("pass " + user.password);

        try {
            axios.post("http://localhost:3000/api/user/login", {
                email: user.email,
                password: user.password
            })
            .then(res => {
                // console.log("message 1");
                // console.log(res.message);
                if(res.status.valueOf(201)) {
                    console.log("data");
                    console.log(res.data)
                    const newUser = { userId: res.data.userId, token: res.data.token };
                    setUserOnline(newUser);
                    // console.log(userOnline)
                    navigate("/");
                }
                else {
                    // console.log("message 2")
                    // console.log(res.message)
                }
            })
        }
        catch (error) {
            console.log(error); 
        }
    }

    function handle(e) {
        const newUser = {...user}
        newUser[e.target.id] = e.target.value
        setUser(newUser)
    }

    return(
        <form onSubmit={(e) => login(e)}>
            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}></Avatar>
                        <h2>Login</h2>
                    </Grid>
                    <TextField onChange={(e) => handle(e)} id="email" value={user.email} label='email' placeholder='Enter email' fullWidth required/>
                        <TextField onChange={(e) => handle(e)} id="password" value={user.password} label='password' placeholder='Enter password' type='password' fullWidth required/>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        <Link href="#" onClick={()=>handleChange("event",1)} >
                            Sign Up 
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </form>
    )
}

export default Login