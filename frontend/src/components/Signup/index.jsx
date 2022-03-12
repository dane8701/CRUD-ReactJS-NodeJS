import React, {useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import axios from 'axios'

const Signup=({handleChange})=>{
    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function signup(e) {
        e.preventDefault();
        console.log("post");
        // console.log("email " + user.email);
        // console.log("pass " + user.password);

        try {
            axios.post("http://localhost:3000/api/user/signup", {
                email: user.email,
                password: user.password
            })
            .then(res => {
                console.log(res.message)
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
        <form onSubmit={(e) => signup(e)}>
            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}></Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <TextField onChange={(e) => handle(e)} id="email" value={user.email} label='email' placeholder='Enter email' fullWidth required/>
                    <TextField onChange={(e) => handle(e)} id="password" value={user.password} label='password' placeholder='Enter password' type='password' fullWidth required/>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                </Paper>
            </Grid>
        </form>
    )
}

export default Signup