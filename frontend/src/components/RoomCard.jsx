import { Box, Button, Divider, ListItemButton, Paper, Rating, Stack, Typography } from "@mui/material";
import {ElipsedText, ConvertTypeToString} from "../services/tools";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function RoomCard({room}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate({
            pathname: "/room",
            search: createSearchParams({
                id: room._id
            }).toString()
        })
    }

    return (
        <ListItemButton divider sx={{width:'100%'}} onClick={handleClick}>
            <Stack direction={{xs:'column', sm:'column',md:'row',lg:'row'}} sx={{width:'100%'}} spacing={2}>
                <Box
                    sx={{
                        width: {xs:'100%',sm:'100%',md:'250px',lg:'250px'},
                        height: {xs:'200px',sm:'200px',md:'250px',lg:'250px'},
                        backgroundColor:'#e8e8e8',
                        objectFit:{ xs:'cover', sm:'cover', md:'contain', lg:'contain'},
                        borderRadius: '12px'
                    }}
                >
                <Box component='img' src={room.images[0]} 
                sx={{
                    width: {xs:'100%',sm:'100%',md:'250px',lg:'250px'},
                    height: {xs:'200px',sm:'200px',md:'250px',lg:'250px'},
                    backgroundColor:'#e8e8e8',
                    objectFit:'contain',
                    borderRadius: '12px'
                }}/>
                </Box>
                <Stack direction='column' flexGrow={1} paddingBottom={3} spacing={0}>
                    <Box
                        sx={{
                            display:'inline-flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <Typography variant="h5" sx={{ fontSize:{xs:'18px',sm:'19px', md: '24px',lg:'27px'}}}>{room.title}</Typography>
                        <Rating value={room.rating} readOnly/>
                    </Box>
                    <Box
                        sx={{
                            display:'inline-flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems: 'center',
                            lineHeight: '1.2',
                            width: '100%'
                        }}
                    >
                        <Typography variant="h6" sx={{ fontSize:{xs:'18px',sm:'19px', md: '24px',lg:'27px'}}}>
                            {room.costPerMonth} ₽ в месяц
                        </Typography>
                        <Typography variant="caption" fontSize='13px'>
                            {356} отзывов
                        </Typography>
                    </Box>
                    <Typography variant="body1"
                        sx={{fontSize: '14px',maxHeight: '60px'
                        }}
                    >
                        {ConvertTypeToString(room.type)}
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize:{xs:'12px',sm:'12px', md: '14px',lg:'14px'},
                            maxHeight: '60px'
                        }}
                    >
                        {room.address}
                    </Typography>
                    <Typography variant="body1"
                        sx={{ fontSize:{xs:'12px',sm:'12px', md: '14px',lg:'14px'},maxHeight: '60px'
                        }} color="textDisabled"
                    >
                        {ElipsedText(room.description,25)}
                    </Typography>
                </Stack>
            </Stack>
        </ListItemButton>
    )
}