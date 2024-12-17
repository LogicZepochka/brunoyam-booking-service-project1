import { Avatar, Container, Divider, Grid2, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../../services/API/API";
import TypographyEx from "../../components/TypographyEx";
import RoomTable from "./components/RoomTable";

const dataID = "67603520e3bd25d1e43808a1";

export default function ProfilePage(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const [loading,setLoading] = useState(false);
    const [userData,setUserData] = useState(null);

    useEffect(() => {
        let id = searchParams.get("id");
        API.Users.GetUserProfileById(id,(err,result) => {
            setTimeout(() => {
            if(!err) { 
                console.log(result.data);
                setUserData(result.data); 
            }
            },4000)
        })
    },[]);

    return (
        <Container fixed>
            <Stack direction='column'>
                {!userData ? (
                <Skeleton variant="circular">
                    <Avatar sx={{width: '150px', height: '150px'}}  />
                </Skeleton>
                ) : (
                <Avatar src={'data.avatar'} sx={{width: '150px', height: '150px'}}/>
                )}
                <Typography variant="h3">{!userData ? <Skeleton /> : userData?.user.name}</Typography>
                <Divider />
                <Grid2 container columns={7} paddingTop={3} paddingBottom={3}>
                    <Grid2 size={2}>
                        <Typography>E-mail:</Typography>
                    </Grid2>
                    <Grid2 size={5}>
                        <TypographyEx  message={userData?.user.email} />
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography>Телефон:</Typography>
                    </Grid2>
                    <Grid2 size={5}>
                        <TypographyEx  message={userData?.user.phone} />
                    </Grid2>
                </Grid2>
                <Divider />
                <Typography variant="h4" paddingTop={2} paddingBottom={2}>Помещения в аренду</Typography>
                <RoomTable rooms={userData?.rooms} />
            </Stack>
        </Container>
    )
}