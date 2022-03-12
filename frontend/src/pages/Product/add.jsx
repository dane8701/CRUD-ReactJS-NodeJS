import React, {useState} from 'react'
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import axios from 'axios'

const Add=({handleChange})=>{

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const btnstyle={margin:'8px 0'}
    
    const [product, setProduct] = useState({
        _id : 0, 
        name : "", 
        type : "phone", 
        price : 0, 
        rating : 0,
        warranty_years : 0, 
        available : true
      });



    function add(e) {
        e.preventDefault();
        console.log("post");
        // console.log("email " + user.email);
        // console.log("pass " + user.password);

        try {
            axios.post("http://localhost:3000/api/product/", {
                product
            })
            .then(res => {
                if(res.status.valueOf(201)) {
                    console.log("message 1");
                    console.log(res.message);
                }
                else {
                    console.log("message 2")
                    console.log(res.message)
                }
            })
        }
        catch (error) {
            console.log(error); 
        }
    }

    function handle(e) {
        const newProduct = {...product}
        newProduct[e.target.id] = e.target.value
        setProduct(newProduct)
    }

    return(
        <form onSubmit={(e) => add(e)}>
            <Grid style={{marginTop: '50px'}}>
                <Typography variant='h2' align="center">ADD PRODUCT</Typography>
                <Paper  style={paperStyle}>
                    <TextField onChange={(e) => handle(e)} id="name" value={product.name}  label='name' placeholder='Enter name' fullWidth required/>
                    <TextField onChange={(e) => handle(e)} id="type" value={product.type}  label='type' placeholder='Enter type' fullWidth required/>
                    <TextField onChange={(e) => handle(e)} id="price" value={product.price}  label='price' placeholder='Enter price' fullWidth required/>
                    <TextField onChange={(e) => handle(e)} id="rating" value={product.rating}  label='rating' placeholder='Enter rating' fullWidth required/>
                    <TextField onChange={(e) => handle(e)} id="warranty_years" value={product.warranty_years}  label='warranty_years' placeholder='Enter warranty years' fullWidth required/>
                    <TextField onChange={(e) => handle(e)} id="available" value={product.available}  label='available' placeholder='Enter available in number' fullWidth required/>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Add product</Button>
                </Paper>
            </Grid>
        </form>
    )
}

export default Add