import { Button, Container, Card, Typography, Grid, CardActions, CardContent } from "@material-ui/core";
import useStyles from "./styles";

function ProductItem({ product }) {
    const classes = useStyles();
    return (
        <>
            <main>
                <Container className={ classes.cardGrid } maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">{product.name}</Typography>
                                    <Typography gutterBottom variant="h6" color="textSecondary">{ product.type}</Typography>
                                    <Typography variant="h5" color="secondary">{product.price} €</Typography>
                                    {product.available ? <Typography>This phone is available and get {product.warranty_years} warranty years</Typography> 
                                        : <Typography>This phone is available and get {product.warranty_years} warranty years</Typography> }
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant="contained" color="primary">Edit</Button>
                                    <Button size="small" variant="outlined" color="primary">Delete</Button>
                                </CardActions>
                            </Card>    
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}
 
// Card.propTypes = {
//     label: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
// }

// Card.defaultProps = {
//     label: '',
//     title: '',
//     picture: DefaultPicture,
// }

export default ProductItem