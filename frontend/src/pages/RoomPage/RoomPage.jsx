import { Container, Grid2, Paper, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TypographyEx from "../../components/TypographyEx";
import { useNavigate, useSearchParams } from "react-router-dom";
import OneRoom from "../../templateItems/OneRoom";
import API from "../../services/API/API";



export default function RoomPage(props) {

    const navigate = useNavigate();
    const [room,setRoom] = useState(null);
    const [searchParams,setSearchParams] = useSearchParams();


    const fetchRoomData = (id) => {
        API.Rooms.GetRoom(id,(err,result) => {
            if(!err) {
                setRoom(result.data);
            }
        });
    }

    useEffect(() => {
        let id = searchParams.get('id');
        if(!id) {
            navigate('/404');
        }
        
        fetchRoomData(id);
    },[])

    return (
        <Container fixed>
            <Grid2 container columns={6} spacing={2} paddingTop={3}>
                <Grid2 size={{xs:6,sm:6,md:3,lg:4}}>
                    <TypographyEx message={room?.title} variant='h4'/>
                </Grid2>
                <Grid2 size={{xs:6,sm:6,md:3,lg:2}}>
                        <TypographyEx message={room?.costPerMonth} aditionalLabel="₽ в месяц" variant='h4'/>
                </Grid2>
            </Grid2>
        </Container>
    )
}