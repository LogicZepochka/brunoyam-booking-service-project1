import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import LogoSVG from "./LogoSVG";
import { useNavigate } from "react-router-dom";

var MenuItems = [
    {label:"Жилье",link:"/rooms"},
    {label:"Настройки",link:"/rooms"}
]

export default function NavBarDesktop(props) {
    
    const navigate = useNavigate();

   

    return (
        <AppBar position="static">
            <Container fixed maxWidth='xl'>
                <Toolbar >
                    
                    <Typography 
                        variant="h5"
                        noWrap
                        sx={{
                            fontFamily:'monospace',
                            letterSpacing: '.2rem'
                        }}
                    >
                        BOOKINGPRJCT
                    </Typography>
                    <Box>
                        <Menu>
                            {MenuItems.map((page,index) => 
                            
                            (
                            <MenuItem key={index} onClick={()=>{navigate(page.link)}}>
                                <Typography textAlign='center'>{page.label}</Typography>
                            </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )

}