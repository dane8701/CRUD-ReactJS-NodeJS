import { AppBar, Container, Toolbar, Typography, Button, Link } from "@material-ui/core";
import CottageIcon from '@mui/icons-material/Cottage';
import useStyles from './styles';

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="relative">
        <Toolbar>
            <Link href="/" style={{color: 'white'}}>
              <Container style={{ display: 'flex'}}>
                  <CottageIcon className={ classes.icon } />
                  <Typography variant="h6">PHONE_WORLD</Typography>  
              </Container>
            </Link>
            <Link href="/add" className={ classes.button1 }>
              <Button className={ classes.button1 } size="small" variant="contained">
                    ADD
              </Button>
            </Link>
            <Link  href="/login" >
              <Button className={ classes.button2 } size="small" variant="contained">
                    LOGIN
              </Button>
            </Link>
        </Toolbar>
    </AppBar>
  )
}

export default Header