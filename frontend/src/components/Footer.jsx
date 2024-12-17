import { Box, Stack, Typography } from "@mui/material";



export default function Footer(props) {


    return (
        <Box id='footer' display='flex' width="100%" sx={{
            backgroundColor: '#2d74ba',
            textAlign:'center',
            minHeight: '64px',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            color: '#6aa9e8'
        }}>
            <Stack direction='column'>
                <Typography variant="subtitle1">
                    Bookingprjct © 2024 
                </Typography>
                <Typography variant="caption">
                    Все представленное здесь не является реальными товарными знаками и не претендует т.д. и прочая юридическая фигня
                </Typography>
            </Stack>
        </Box>
    )
}