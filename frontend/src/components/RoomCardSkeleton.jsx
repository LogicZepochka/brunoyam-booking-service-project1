import { Box, Button, Divider, ListItemButton, Paper, Rating, Skeleton, Stack, Typography } from "@mui/material";
import {ElipsedText, ConvertTypeToString} from "../services/tools";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function RoomCardSkeleton() {

    const navigate = useNavigate();

    const handleClick = () => {
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
                        <Typography variant="h5" sx={{ fontSize:{xs:'18px',sm:'19px', md: '24px',lg:'27px'}}}><Skeleton sx={{
                            width:{xs:'150px',sm:'150px',md:'300px',lg:'350px'}
                            }} /></Typography>
                        <Rating value={0} readOnly/>
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
                            <Skeleton width='100px' />
                        </Typography>
                        <Typography variant="caption" fontSize='13px'>
                            <Skeleton width='50px' />
                        </Typography>
                    </Box>
                    <Typography variant="body1"
                        sx={{fontSize: '14px',maxHeight: '60px'
                        }}
                    >
                        <Skeleton width='70px' />
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            fontSize:{xs:'12px',sm:'12px', md: '14px',lg:'14px'},
                            maxHeight: '60px'
                        }}
                    >
                        <Skeleton width='70px' />
                    </Typography>
                    <Typography variant="body1"
                        sx={{ fontSize:{xs:'12px',sm:'12px', md: '14px',lg:'14px'},maxHeight: '60px'
                        }} color="textDisabled"
                    >
                        <Skeleton /><br/>
                    </Typography>
                </Stack>
            </Stack>
        </ListItemButton>
    )
}