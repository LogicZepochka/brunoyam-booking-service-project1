import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Paper, Rating, Stack, Typography } from "@mui/material";
import { useEffect } from "react";



export default function RoomSmallCard({imageHeight,minHeight,maxWidth,description,onClick, room }) {

    useEffect(() => {
        console.log(room);
        console.log("LOL")
    },[])

    return (
        <Paper variant="outlined" sx={{maxWidth: maxWidth || '350px'}}>
                <CardMedia 
                    sx={{height: imageHeight || '150px'}}
                    image={room.images[0]}
                    title={room.title}
                    alt={room.title}
                />
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: {xs:'column',sm:'column', md:'row', lg:'row'},
                        justifyContent:'space-between',
                        alignItems: 'center'
                    }}>
                    <Typography variant='h5' textAlign='left' fontSize={{xs: '16px', md:'24px'}}>
                        ddd
                        {room.title}
                    </Typography>
                        <Stack direction={'row'} spacing={1} alignItems='center'>
                            <Typography variant="caption">
                                {room.rating}
                            </Typography>
                            <Rating value={room.rating} readOnly/>
                            
                        </Stack>
                    </Box>
                    {description && <Typography variant="body1" sx={{}}>
                        {room.description}
                    </Typography>}
                    <Divider />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: {xs:'column',sm:'column', md:'row', lg:'row'},
                        justifyContent: 'space-between'
                    }} paddingTop={2}>
                        <Typography variant="h6">
                            {room.costPerMonth} руб/мес
                        </Typography>
                        <Button>Подробнее</Button>
                    </Box>
                </CardContent>
        </Paper>
    )
}