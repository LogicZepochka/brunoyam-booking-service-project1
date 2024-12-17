import { Box, Container, Drawer, Stack } from '@mui/material';
import "./LogIn.css"
import LogoSVG from '../../components/LogoSVG';
import LoginForm from './components/LoginForm';
import ForgotPassword from './components/ForgotPassword';
import { Outlet, useSearchParams } from 'react-router-dom';

export default function LogIn({...props}) {


    

    return (
        <>
        <Box
            sx={{
                backgroundImage: `url("/images/LogInBg.jpg")`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100% !important',
                height: '100vh',
                width: '100%',
                display: { xs: 'none', sm: 'none', md: 'block' }
            }}
        >
            <Drawer
                anchor='right'
                variant='permanent'
                sx={{
                    display: { xs: 'none', sm:'none', md: 'block', lg: 'block'},
                }}
                PaperProps={{
                    sx: {
                        width: '100%',
                        maxWidth: '480px'
                    }
                }}
            >
                <Stack direction='column' justifyContent='space-between' justifyItems='spa' alignItems='center'>
                    <Box sx={{paddingTop: '32px'}}>
                        <LogoSVG color='#1976d2' width="250px" height="250px"/>
                    </Box>
                    <Outlet />
                </Stack>
            </Drawer>
            
        </Box>
            <Box flex sx={{
                        display: { xs: 'block', sm:'block', md: 'none', lg: 'none'},
                        height: '100%'
                    }} flexWrap>
                <Stack direction='column' justifyContent='space-between' height='100%' justifyItems='spa' alignItems='center'>
                    <Box sx={{paddingTop: '32px'}}>
                        <LogoSVG color='#1976d2' width="250px" height="250px"/>
                    </Box>
                    <Outlet />
                </Stack>
            </Box>
        </>
    )
}