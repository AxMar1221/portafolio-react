import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';


export const AppNarvar = () => {
    const buttonStyle = {
        color: '#ffffff',
        '&:hover':{
            backgroundColor: '#ffffff',
            color: '#167271'
        },
    }
  return (
    <>
        <AppBar position="fixed" sx={{ backgroundColor: '#167271' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                     Developer Tachi
                </Typography>
                <Button sx={buttonStyle} href="#">Sobre mi</Button>
                <Button sx={buttonStyle} href="#">Skills</Button>
                <Button sx={buttonStyle} href="#">Hobbies</Button>
                <Button sx={buttonStyle} href="#">Formación</Button>
                <Button sx={buttonStyle} href="#">Proyectos</Button>
                <Button sx={buttonStyle} href="#">Contacto</Button>
            </Toolbar>
        </AppBar>
    </>
  )
}
